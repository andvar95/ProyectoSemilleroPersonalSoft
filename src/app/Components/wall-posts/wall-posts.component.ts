import { Component, HostListener, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from '../Shared/Services/posts.service';
import { SessionStorageService } from '../Shared/Services/session-storage.service';
import { UsersService } from '../Shared/Services/users.service';
import {FormCreatePostComponent} from 'src/app/Components/Forms/form-create-post/form-create-post.component'
import { LoginFormComponent } from '../Forms/login-form/login-form.component';
import { OldPost } from '../Models/Post.interface';
import { GroupService } from '../Shared/Services/group.service';
import { SocketService } from '../Shared/Services/socket.service';
import { NotificationComponent } from '../notification/notification.component';
import { Logueduser } from '../Models/user';
import { Comments } from '../Models/Comments.interface';
import { Group } from '../Models/Group.interface';
@Component({
  selector: 'app-wall-posts',
  templateUrl: './wall-posts.component.html',
  styleUrls: ['./wall-posts.component.scss']
})
export class WallPostsComponent implements OnInit, OnDestroy,OnChanges {
  begin = -5;
  Posts:OldPost[] = []
  new_comments:Comments[] = []
  PostSus = this.postService.getPostSuscription().
  subscribe(postList=>{
    this.Posts = postList
  })
  Users:Logueduser[] = []
  Groups:Group[] = []
  notification = false;
  currentUser!:Logueduser;
  pos = 0
  

  constructor(
    private storage:SessionStorageService,
    private postService:PostsService,
    private userservice:UsersService,
    private groupservice:GroupService,
  ) {
    //console.log("inicio")
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }

  ngOnDestroy(): void {
    this.PostSus.unsubscribe()
  }

  ngOnInit(): void {
    this.Posts = this.postService.getPosts()
    this.currentUser = this.storage.obtenerUsuario()
  this.requestGroups()
   
  }

  getPosts(){

    this.postService.getPagePost(this.begin+=5).subscribe((data:any)=>{
      console.log(data)
      const post = data.results as OldPost[]
        this.postService.setPosts(post)
    })}

  requestUser(){

    console.log("sigo?")
    this.userservice.getUsers().subscribe((user:Logueduser[])=>{
      this.Users = user as Logueduser[]
      //console.log(this.Users)
      this.getPosts()})
  }

  requestGroups(){
    this.groupservice.getGroups().subscribe((group:Group[])=>{
      this.Groups = [...this.Groups,...group]
      //console.log(this.Groups)
      this.requestUser()})
  }


randomNumber(max:number){

  const idx:any[] = []

  do{
    const number = Math.round(Math.random()*(max-0)+0)
    if(idx.indexOf(number)===-1){
      idx.push(number)
     
    }
}while(idx.length<7 && idx.length<max)
return idx
}


modifyAdvert(evt:any){
  const inputAdvert = evt.split("-")


  if(inputAdvert[1]==='group'){
    this.Groups = this.Groups.filter(groups=>groups.ID !== Number(inputAdvert[0]))
  }
  else{
    this.Users =this.Users.filter(users=>users.ID !== Number(inputAdvert[0]))
  }
}

@HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll(event:any){
    let scrollOffset = event.srcElement.scrollingElement.scrollTop;
  
    
   if(event.srcElement.scrollingElement.scrollHeight-scrollOffset===event.srcElement.scrollingElement.clientHeight){
      this.getPosts()
   }
     
  }

}
