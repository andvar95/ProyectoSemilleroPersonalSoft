import { Component } from '@angular/core';
import { OldPost } from './Components/Models/Post.interface';
import { PostsService } from './Components/Shared/Services/posts.service';
import { SessionStorageService } from './Components/Shared/Services/session-storage.service';
import { SocketService } from './Components/Shared/Services/socket.service';
import { UsersService } from './Components/Shared/Services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProyectoPersonalSoft';

  /*
  notification= false
  type=""
  followed =""
  follower =""
  content=""
  post_id:number=0
  localPost:OldPost[] = []
  myP:boolean = false

  EventSub = this.socketservice.getEventSuscription().subscribe(
    data=>{
      console.log(data)

  
      /*
      
      if(data.post_id !== 0){
      this.postservice.getPostByUser(this.storage.obtenerUsuario().ID).subscribe((posts:any)=>{
            this.localPost = posts 
            this.myP = this.localPost.some((post:OldPost)=>post.ID === data.post_id)
            console.log(this.myP) })    
      }*/
/*
      const post = this.fetchPost()
      post.then((data:any)=>{
        console.log(data)
      })
      */
     /*

      this.myP = true
      if(data.event === 'new::reaction' && this.myP ){
        this.type='reaccionado'
        console.log(data.reaction.user.name)
        this.content = data.reaction.user.name
        this.post_id = data.post_id
        console.log(this.post_id)
        this.notification = true
      
      }
      else if(data.event === 'new::comment' && this.myP)
      {
        this.type='comentado'
        this.content = data.comment.User.name
        this.post_id = data.post_id
        this.notification = true
        
      }
      else if(data.event === 'new::subuser'){
            this.type="follow"
            console.log(this.followed,this.follower)
            this.content=`${data.followed_id}-${data.user_id}`
            this.notification = true
            
      }

      else if(data.event === 'new::post'){

        const New_Post:OldPost[]= []
        New_Post.push(data.post)
        this.postservice.setPosts(New_Post)
        this.type="post"
        this.content=data.post.user.name
        this.post_id = data.post.ID
        this.notification = true
        
  }

     
      setTimeout(()=>{
        this.notification = false
      },50000)
    }
  
  )*/
  constructor(
    private socketservice:SocketService,
    private storage:SessionStorageService,
    private postservice:PostsService,
    private userservice:UsersService
  ){
    //this.socketservice.getEvent()

  }


}



/* 
comment: {ID: 0, CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", DeletedAt: null, comment: "", …}
event: "new::subuser"
followed_id: 13
post: {ID: 0, CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", DeletedAt: null, user_id: 0, …}
reaction: {ID: 0, CreatedAt: "0001-01-01T00:00:00Z", UpdatedAt: "0001-01-01T00:00:00Z", DeletedAt: null, user_id: 0, …}
user_id: 3



*/