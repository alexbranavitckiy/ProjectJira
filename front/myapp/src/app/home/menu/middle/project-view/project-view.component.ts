import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../../../shared/modalService";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  constructor(private  modalServ:ModalService) { }

  ngOnInit() {
  }

}
