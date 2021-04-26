import { Component, Input, OnInit } from '@angular/core';
import { SessionStorageService } from '../Shared/Services/session-storage.service';
import {Logueduser} from '../Models/user'
import { FollowService } from '../Shared/Services/follow.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {


  @Input()currentUser:Logueduser={
    CreatedAt: "",
    DeletedAt: "",
    ID: 0,
    UpdatedAt: "",
    avatar: "",
    followed:false,  
    email: "",
    name: ""
  };
  constructor(
    private storage:SessionStorageService,
    private followservice:FollowService
  ) { }
  
  
  ngOnInit(): void {
    console.log(this.currentUser)
    //this.currentUser = this.storage.obtenerUsuario()
    //console.log(this.currentUser)
  }

  follow(id_user:any){

  
    console.log("entro")
      const body = {
          "user_id": Number(this.storage.obtenerUsuario().ID),
          "followed_id": Number(id_user)
      }
  
      this.followservice.follow(body).subscribe(
        data=>{
          this.currentUser.followed = true
          console.log(data)
          
        },error=>{
          console.log(error)
        }
      )
  
    }
}
