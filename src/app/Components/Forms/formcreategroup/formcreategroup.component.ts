import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupService } from '../../Shared/Services/group.service';
import { SessionStorageService } from '../../Shared/Services/session-storage.service';

@Component({
  selector: 'app-formcreategroup',
  templateUrl: './formcreategroup.component.html',
  styleUrls: ['./formcreategroup.component.scss']
})
export class FormcreategroupComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal,
    private groupService:GroupService,
    private storage:SessionStorageService

  ) { }

  group={
    name:'',
    description:""
  }

  ngOnInit(): void {
    document.body.style.overflow = "hidden"; 
  }

  cerrar(){
    document.body.style.overflow = "auto"; 
    this.activeModal.close()
  }

  createGroup(form:NgForm){
    
    if(form.valid){
      console.log(form.controls)
    const groupBody = {
      "name": form.controls['nombre'].value,
      "description": form.controls['description'].value,
      "creator_id": Number(this.storage.obtenerUsuario().ID)
    }

    console.log(groupBody)
    

    this.groupService.createGroup(groupBody).subscribe(
      res=>{
        console.log(res)
        this.cerrar()
      },error=>{
        console.log(error)
      }
    ) 
      }
  }}

