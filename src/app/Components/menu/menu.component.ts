import { Component, OnInit } from '@angular/core';
import { OldPost } from '../Models/Post.interface';
import { NotificationComponent } from '../notification/notification.component';
import { PostsService } from '../Shared/Services/posts.service';
import { SessionStorageService } from '../Shared/Services/session-storage.service';
import { SocketService } from '../Shared/Services/socket.service';
import { UsersService } from '../Shared/Services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  notification= false
  type=""
  followed =""
  follower =""
  content=""
  post_id:number=0
  
  localPost:OldPost[] = []
  myP:boolean = false
/*
  EventSub = this.socketservice.getEventSuscription().subscribe(
    data=>{
      console.log(data)

  



      if(data.event === 'new::reaction' ){

        if(data.reaction.user.name !== this.storage.obtenerUsuario().name){
        this.type='reaccionado'
        console.log(data.reaction.user.name)
        this.content = data.reaction.user.name
        this.post_id = data.post_id    
        console.log(this.post_id)
        this.notification = true
        }
      }
      else if(data.event === 'new::comment' )
      {
        if(data.comment.User.name !== this.storage.obtenerUsuario().name){
        this.type='comentado'
        this.content = data.comment.User.name
        this.post_id = data.post_id
        this.notification = true
        }
      }
      else if(data.event === 'new::subuser'){

            this.type="follow"
            console.log(this.followed,this.follower)
            this.content=`${data.user.name}-${data.user.followed[0].name}`
            this.notification = true
            
      }

      else if(data.event === 'new::post'){

        if(data.post.user.name !== this.storage.obtenerUsuario().nombre){

        const New_Post:OldPost[]= []
        New_Post.push(data.post)
        this.postservice.setPosts(New_Post)
        this.type="post"
        this.content=data.post.user.name
        this.post_id = data.post.ID
        this.notification = true
      }
      }
      else if(data.event === "new::subgroup"){

        this.type="subgroup"
        this.content = `${data.group.name}-${data.user.name}`
        this.notification = true

      }
        
 
  
    }
  
  )*/
  constructor(
    private socketservice:SocketService,
    private storage:SessionStorageService,
    private postservice:PostsService,
    private userservice:UsersService,
    //private notificationComp:NotificationComponent
  ){
    this.socketservice.getEvent()

  }

  listenPropagation(evt:any){
  console.log(evt)
  if(evt === 'close'){
    this.notification = false
  }
  }

  ngOnInit(): void {
  }

}
