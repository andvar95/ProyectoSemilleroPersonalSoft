import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { OldPost } from '../Models/Post.interface';
import { Logueduser } from '../Models/user';
import { PostsService } from '../Shared/Services/posts.service';
import { SessionStorageService } from '../Shared/Services/session-storage.service';
import { UsersService } from '../Shared/Services/users.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit,OnChanges {
  @Input() type:string =""
  @Input() content:string =""
  @Input() id_post:number=0;
  @Output() propagar = new EventEmitter<string>();

  names:string[] = []
  followed=""
  follower=""
  follow_msj =""
  to=""
  group_name =""
  user_name = ""
  post_eva =""
  
  visible = false
  constructor(
    private router:Router,
    private userservice:UsersService,
    private postservice:PostsService,
    private storage:SessionStorageService
  ) { }  
  ngOnChanges(changes: SimpleChanges): void {
  this.names= []
  this.followed=""
  this.follower=""
  this.follow_msj =""
  this.to=""
  this.user_name = ""

    
  
  }

  ngOnInit(): void {
    this.names= []
    this.followed=""
    this.follower=""
    this.follow_msj =""
    this.to=""
    this.user_name = ""
    
    console.log(this.content)
    if(this.type==='follow'){
      console.log(this.names)
      this.names = this.content.split("-")
      this.follower = this.names[0]
      this.followed = this.names[1]

   
        if(this.followed === this.storage.obtenerUsuario().name){
          this.follow_msj =`te sigue`
        }
        else{
          this.follow_msj = `sigue a ${this.followed}`
        }
          this.showTemporary()
  
   
     
    }
    else if(this.type==='reaccionado' || this.type==='comentado'){
      this.postservice.getPostbyId(this.id_post).subscribe((post:OldPost)=>{
        this.user_name = post.user.name
       
          this.userservice.search(this.content).subscribe((userVer:any)=>{
          const us = userVer[0] as Logueduser
        
          if(us.followed){
            if(
              post.user.name === this.storage.obtenerUsuario().name){
                this.to = `tuya`
              
              this.propagar.emit(`tuya-${this.type}-${this.id_post}-${this.content}`)
              
            }
            else{this.to = ` de ${post.user.name}`}
            this.showTemporary()
    }})})}
    else if (this.type === 'subgroup'){
       this.names = this.content.split("-")
       this.showTemporary()}  }

  goToPost(){

    console.log(this.id_post)
    if(this.id_post !== 0){
    this.router.navigate(['/home/post'],{queryParams:{id_post:this.id_post}})
  }
  }
  closeWindow(){
    this.propagar.emit("close-NN");
  }

  showTemporary(){
    this.visible = true
    setTimeout(()=>{
      this.closeWindow()
    },15000)
  
}
}
