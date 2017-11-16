import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Standarts Input for Service of Events
import { Evento } from '../../models/event.model';
import { EventsService } from '../../services/events/events.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-events',
  templateUrl: 'list-events.component.html',
  styleUrls: ['list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  // Storage interly event array on list event
  events: Evento[];
  edited_event: Evento = new Evento;
  edit: boolean = true;
  closeResult: string;
  @Input() search: string = '';
  @Output('refreshSearch') refreshSearch: EventEmitter<any> = new EventEmitter<any>();


  constructor( private listeventserviece: EventsService, private modalService: NgbModal) {
    // This line is to ensure that event get its values
    this.events = this.listeventserviece.getEvents();
  }

  ngOnInit() {
  }

  orderList (){
    this.events.sort( (a,b) => a.id);
  }

  removeEvent( remove_event: Evento) {
    console.log('event to remove', remove_event);
    this.listeventserviece.removeEvento( remove_event );
    this.search = '';
    this.refreshSearch.emit(this.search);
  }

  editEvent ( edited_event: Evento ) {
    console.log('evento edit', edited_event);
    this.listeventserviece.editEvento ( edited_event );
    this.search = '';
    this.refreshSearch.emit(this.search);

  }
  addEvent( edited_event: Evento ){
    console.log('evento add', edited_event);
    this.listeventserviece.addEvento ( edited_event );
    console.log(this.events);
    this.search = '';
    this.refreshSearch.emit(this.search);
  }

  open(content, event: Evento) {

    if(event == null){
      console.log(event);
      this.edit = false;
    }
    else{
      this.edit = true;
      this.edited_event =  JSON.parse(JSON.stringify(event));
    }
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if(value===''){
      /* En esta condicion se aplican el borrar/editar/agregar, si esto no se cumple no funcan los metodos */
      return items;
    }
    console.log('items', items);
    console.log('field', field);
    console.log('value', value);
    if (!items) return [];
    return items.filter(it => it[field].toLowerCase().includes(value.toLocaleLowerCase()));
  }
}
