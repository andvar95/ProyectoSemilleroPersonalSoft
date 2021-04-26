import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../Models/Group.interface';
import { GroupService } from '../Shared/Services/group.service';

@Component({
  selector: 'app-groupdetail',
  templateUrl: './groupdetail.component.html',
  styleUrls: ['./groupdetail.component.scss']
})
export class GroupdetailComponent implements OnInit {


  Group!:Group;
  id:number=0
  visible = false
  groupname = ""
  constructor(
    private groupservice:GroupService,
    private route:ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data:any)=>{
      console.log(data)
      this.id = data['grupo_id']
      this.doOnInit()
    })

  }
  doOnInit() {
    this.groupservice.getGroups().subscribe((data:any)=>{
      const group = data.filter((gr:any)=>gr.ID === Number(this.id))
      this.Group = group[0] as Group
      console.log(this.Group)
      this.visible = true
      this.groupname = `Miembros de ${this.Group.name}`
    })
  }

}
