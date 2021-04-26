import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Comments } from '../Models/Comments.interface';
import { OldPost } from '../Models/Post.interface';
import { CommentsService } from '../Shared/Services/comments.service';
import { ReactionService } from '../Shared/Services/reaction.service';
import { SessionStorageService } from '../Shared/Services/session-storage.service';
import { SocketService } from '../Shared/Services/socket.service';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit,OnChanges {
  
  @Input() post!: OldPost;
  new_comments:Comments[] = []
  comment = ""
  seeMore = false
  Numreactions=0;
  Ireacted = false;
  evt:any;
  EventSub = this.socketservice.getEventSuscription().subscribe(
    event=>{
    
    if(event.event!== 'new::subuser'){

      if(event.event==='remove::reaction' && event.post_id === this.post.ID){
         this.post.reactions =  this.post.reactions.filter((data:any) => data.user_id !== Number(this.storage.obtenerUsuario().ID))
      
      }
      else if(event.event==='new::reaction' && event.post_id === this.post.ID){
        this.post.reactions.push(event.reaction)
   
        
        //this.Numreactions+=1;
      }
  //new::comment
      else if(event.event==='new::comment' && event.post_id === this.post.ID){

        this.new_comments.unshift(event.comment)
       

      }
      this.Numreactions = this.post.reactions.length
      this.verifyReaction()
    }
    }
  )

  constructor(
    private comments:CommentsService,
    private storage:SessionStorageService,
    private reactions:ReactionService,
    private socketservice:SocketService,
    private router:Router
  ) { 
    console.log("entro?")
  }

  comentarioActivo:boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambios")
  
  }

  ngOnInit(): void {
    console.log("entro init")
    this.socketservice.getEvent()
    
   // console.log(this.post)
    this.new_comments = []
  
    if(!Boolean(this.post.reactions)){this.post.reactions = []}
    this.allComents(this.post.ID)
    this.Numreactions = this.post.reactions.length 
    this.verifyReaction()
  
  }

verifyReaction(){

  this.Ireacted = this.post.reactions.some((data:any)=>data.user_id === this.storage.obtenerUsuario().ID)

}

commentAction(){
  this.comentarioActivo =  this.comentarioActivo==true?false:true
}

allComents(id:number){

  this.comments.getAllComments(id).subscribe((data:OldPost)=>{
    console.log("comen")
    console.log(data)
    this.new_comments= [...this.new_comments,...data.comments]  as Comments[]
    console.log("fin")
    console.log(this.new_comments)
  })
}

seeMoreFuntion(){this.seeMore =this.seeMore===true?false:true;}

doComment(postId:number){
  const commentbody = {
    "comment":this.comment,
    "post_id":postId,
    "user_id":Number(this.storage.obtenerUsuario().ID)
  }

  this.comments.createComment(commentbody).subscribe(
    data=>{
      console.log(data)
      this.comment = ""
    },
    error=>{
      console.log(error)
    }
  )
}

doReaction(postId:Number){
  const reactionBody = {
    "post_id":postId,
    "user_id":Number(this.storage.obtenerUsuario().ID)
  }
   console.log(reactionBody)
  this.reactions.doReaction(reactionBody).subscribe(
    data=>{
      console.log(data)
     
    },
    error=>{
      console.log(error)
    }
  )
}

gotoPost(){
  console.log("click post")
  this.router.navigate(['/home/post'],{queryParams:{id_post:this.post.ID}})
}


}
