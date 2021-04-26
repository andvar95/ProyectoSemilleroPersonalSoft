import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormCreatePostComponent } from '../Forms/form-create-post/form-create-post.component';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Shared/Services/users.service';
import { SessionStorageService } from '../Shared/Services/session-storage.service';
import {Logueduser} from '../Models/user'
import { PostsService } from '../Shared/Services/posts.service';
import { OldPost } from '../Models/Post.interface';
import { FollowService } from '../Shared/Services/follow.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name:string =""
  user:Logueduser={
  CreatedAt: "",
  DeletedAt: "",
  ID: 0,
  UpdatedAt: "",
  avatar: "",
  email: "",
  name: ""};
  Posts:OldPost[] = []
  myProfile:boolean = false;


  constructor(
    private modal:NgbModal,
    private route:ActivatedRoute,
    private userService:UsersService,
    private storage:SessionStorageService,
    private postService:PostsService,
    private followservice:FollowService
  ) { 
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data:any)=>{
      console.log(data)
      this.name = data['usuario']
      this.doOnInit()
    })
  }
  doOnInit(){
  
    if(this.name=== this.storage.obtenerUsuario().name){
      this.myProfile = true
      this.user=this.storage.obtenerUsuario() as  Logueduser
      this.getPosts()
      
    }
    else{
        this.userService.search(this.name).subscribe((data:any)=>{
          this.user = data[0] as  Logueduser
          console.log(this.user)
          this.getPosts()
      })

      
    }

 
 

    
  
    }
  
  
  
    follow(id_user:number){
   
  
        const body = {
            "user_id": Number(this.storage.obtenerUsuario().ID),
            "followed_id": id_user
        }
    
        this.followservice.follow(body).subscribe(
          data=>{
            console.log("res")
            console.log(data)
            this.getPosts()
            
          },error=>{
            console.log(error)
          }
        )
    
      }
  


      getPosts(){
        this.postService.getPostByUser(Number(this.user.ID)).subscribe((data:any)=>{
          console.log(data)
          this.Posts = data as OldPost[]
        })
    
      }
  
  
  }





