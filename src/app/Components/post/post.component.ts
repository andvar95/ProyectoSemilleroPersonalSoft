import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OldPost } from '../Models/Post.interface';
import { PostsService } from '../Shared/Services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  Post!:OldPost;
  wait:boolean = true;

  constructor(
    private activerouter:ActivatedRoute,
    private postservice:PostsService
  ) { }


  ngOnInit(): void {
    console.log(this.activerouter.snapshot.queryParams)
    this.activerouter.queryParams.subscribe((data:any)=>{

      this.postservice.getPostbyId(data['id_post']).subscribe((post:OldPost)=>{
        this.Post = post
        this.wait = false
      })
      
    })

    
      
  }

}
