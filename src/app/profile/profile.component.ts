import {Component, OnInit, NgModule} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// Standarts Input for Service of Humans
import {Human} from '../models/human.model';
import {HumansService} from '../services/humans/humans.service';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // Storage interly the human's profile data
  profile: Human;
  humans: Human[];
  closeResult: string;

  constructor(private humansserviece: HumansService, private modalService: NgbModal) {
    // This line is to ensure that listhuman get its values
    this.humans = this.humansserviece.getHumans();
  }

  ngOnInit() {
    this.profile = this.humans[0];
  }

  open(content) {
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

  toggleModal() {
  }

}
// Binding sesion with profile?
