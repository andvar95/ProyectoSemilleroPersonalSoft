import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCreatePostComponent } from '../Forms/form-create-post/form-create-post.component';
import {Logueduser} from '../Models/user'

@Component({
  selector: 'app-newpost-template',
  templateUrl: './newpost-template.component.html',
  styleUrls: ['./newpost-template.component.scss']
})
export class NewpostTemplateComponent implements OnInit {
  @Input()currentUser:Logueduser={
    CreatedAt: "",
    DeletedAt: "",
    ID: 0,
    UpdatedAt: "",
    avatar: "",  
    email: "",
    name: ""
  };


  constructor(
    private modal:NgbModal
  ) { }

  ngOnInit(): void {
  }


  openModal(){
    const  modalRef = this.modal.open(FormCreatePostComponent,{ backdrop: 'static', size: 'lg'})
   
  }

}
