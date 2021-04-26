import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../Models/Group.interface';
import { GroupService } from '../Shared/Services/group.service';
import { SessionStorageService } from '../Shared/Services/session-storage.service';

@Component({
  selector: 'app-cardgroup',
  templateUrl: './cardgroup.component.html',
  styleUrls: ['./cardgroup.component.scss']
})
export class CardgroupComponent implements OnInit {
  
  @Input() currentGroup!:Group
  join=false;
  constructor(
    private storage:SessionStorageService,
    private groupservice:GroupService
  ) { }

  ngOnInit(): void {
  }

  joinGroup(id_group:number){
  
      console.log(id_group)
  
      const body = {
        "user_id": Number(this.storage.obtenerUsuario().ID),
        "group_id": id_group
      }
  
      this.groupservice.addUser(body).subscribe(
        data=>{
          this.join = true
          console.log(data)
          
        },error=>{
          console.log(error)
        }
      )
    

  }

}
