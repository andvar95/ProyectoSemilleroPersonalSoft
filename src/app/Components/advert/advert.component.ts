import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FollowService } from '../Shared/Services/follow.service';
import { GroupService } from '../Shared/Services/group.service';
import { SessionStorageService } from '../Shared/Services/session-storage.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.scss']
})
export class AdvertComponent implements OnInit {
  @Input() title:string = ""
  @Input() list:any[] = []
  @Input() type:string =""
  @Output() propagar = new EventEmitter<string>();


  constructor(
    private storage:SessionStorageService,
    private groupservice:GroupService,
    private followservice:FollowService,
    private router:Router

  ) { }

  ngOnInit(): void {
    }

  addToGroup(id_group:number){
    console.log(id_group)

    const body = {
      "user_id": Number(this.storage.obtenerUsuario().ID),
      "group_id": id_group
    }

    this.groupservice.addUser(body).subscribe(
      data=>{
        console.log(data)
        this.propagar.emit(`${id_group}-group`)
        
      },error=>{
        console.log(error)
      }
    )
  }

  follow(id_user:number){
  console.log("entro")
    const body = {
        "user_id": Number(this.storage.obtenerUsuario().ID),
        "followed_id": id_user
    }

    this.followservice.follow(body).subscribe(
      data=>{
        this.propagar.emit(`${id_user}-user`)
        console.log(data)
        
      },error=>{
        console.log(error)
      }
    )

  }

  gotoProfile(id:number,name:string){

    if(this.type === 'Us' || this.type ==='search')
    {
    this.router.navigate(['/home/profile'], { queryParams: { usuario:name}})
    }
    else{
      this.router.navigate(['/home/group'],{ queryParams: { grupo_id:id}})
    }
    
  }

}
