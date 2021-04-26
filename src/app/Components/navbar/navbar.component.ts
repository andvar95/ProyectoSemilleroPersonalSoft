import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SessionStorageService } from '../Shared/Services/session-storage.service';
import { Logueduser} from '../Models/user'
import { Route, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormcreategroupComponent } from '../Forms/formcreategroup/formcreategroup.component';
import { UsersService } from '../Shared/Services/users.service';
import { OldPost } from '../Models/Post.interface';
import { SocketService } from '../Shared/Services/socket.service';
import { PostsService } from '../Shared/Services/posts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  currentUser!: Logueduser;
  Users:any[] = []
  actualRoute = ""
  searchText=""

    /* socket variables */
    notification= false
    type=""
    followed =""
    follower =""
    content=""
    post_id:number=0
    notificationInfo:any = []
    
    localPost:OldPost[] = []
    myP:boolean = false

  constructor(
    private storage:SessionStorageService,
    private router:Router,
    private modal:NgbModal,
    private userservice:UsersService,
    private socketservice:SocketService,
    private postservice:PostsService
    //private route:Route
  ) { 
    
  }
  
  

  change(){
    console.log(this.router.url)
  }
  
  ngOnInit(): void {
    this.currentUser = this.storage.obtenerUsuario()
    console.log(this.currentUser)
  }

  openModalGroup(){
    console.log("abro")
    const  modalRef = this.modal.open(FormcreategroupComponent,{ backdrop: 'static', size: 'lg'})
   
  }
  searchFc(evt:any){
    console.log(evt.target.value)
    this.searchText = evt.target.value
/*
    this.userservice.getUsers().subscribe((user:any)=>{
        this.Users = user       
        this.Users = this.Users.filter((user:any)=>user.name.toLowerCase().includes(this.searchText.trim().toLowerCase()))
        
    })*/

    this.userservice.search(this.searchText).subscribe((user:any)=>{
      this.Users = user  
      console.log(user)
    })

  }

  exit(){
    window.sessionStorage.clear()
    this.router.navigate(['/login'])
  }

/* Socket services*/


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
            console.log(`${data.user.name}-${data.user.followed[0].name}`)
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
  
  )

  listenPropagation(evt:any){
    console.log(evt)
    const evtParts = evt.split("-")
    if(evtParts[0] === 'close'){
      this.notification = false
    }
    else if (evtParts[0]=== 'tuya'){
     console.log("entro")
      this.notificationInfo.push({
        type:evtParts[1],
        id_post:evtParts[2],
        content:evtParts[3]
      })
      console.log(this.notificationInfo)
      

    }
    }
  
  
}
