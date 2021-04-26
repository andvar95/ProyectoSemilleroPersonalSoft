import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';
import { PostsService } from '../../Shared/Services/posts.service';
import { SessionStorageService } from '../../Shared/Services/session-storage.service';
import {Post} from '../../Models/Post.interface';
import {Logueduser} from '../../Models/user'
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NewpostvalidatorService } from '../../Shared/Services/newpostvalidator.service';

@Component({
  selector: 'app-form-create-post',
  templateUrl: './form-create-post.component.html',
  styleUrls: ['./form-create-post.component.scss']
})
export class FormCreatePostComponent implements OnInit {
  
  form:FormGroup;
  post:Post={
      posted_text:'',
      user_id: 0,
      image_url:'',
      user:{
        CreatedAt: "",
        DeletedAt: "",
        ID: 0,
        UpdatedAt: "",
        avatar: "",  
        email: "",
        name: ""
      }
  }
  user:any;
  eventNow:any;
  url:Observable<string> = of("");
  estado:boolean = false
  image_url=''



  constructor(
      private activeModal: NgbActiveModal,
      private storage:SessionStorageService,
      private postService:PostsService,
      private fireBaseStorage:AngularFireStorage,
      private formBuilder:FormBuilder,
      private newpostvalidator:NewpostvalidatorService
  ) { 
    
    this.form = this.formBuilder.group({
      posted_text:[''],
      image_url:['']
    },{
    validator:this.newpostvalidator.atLeastOneField
  })

  }

  ngOnInit(): void {
    this.user = this.storage.obtenerUsuario()
    document.body.style.overflow = "hidden"; 
  }
  loadImg(evt:any){
    console.log(evt.target.result)
  }

  upImage(evt:any){
    console.log(evt);
    this.eventNow = evt
    const file =evt.target.files[0]
    const  reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = (e:any)=>{
      this.image_url = e.target.result
        this.estado = true
    }
  
  }
  

  
  

  publish(){
   if(this.form.valid){
     
    if(Boolean(this.eventNow)){

    const file =this.eventNow.target.files[0]
    const parts = file.name.split(".");
    const ext = parts[parts.length-1]
    const name = `${Date.now()}-${this.user.ID}.${ext}`
    const path = `PersonalBucket/{${name}/`;
    const ref = this.fireBaseStorage.ref(path)
    const task =this.fireBaseStorage.upload(path,file)
    task.snapshotChanges().pipe(
      finalize(()=>{
        this.url = ref.getDownloadURL()
      
        this.url.subscribe(data=>{
         
          this.post.image_url = data
          this.finishPost(this.form.value.posted_text)
        

        })

        
      })
    ).subscribe(data => console.log(data))
    
  }
  else{
    console.log(this.post.posted_text)
    this.finishPost(this.form.value.posted_text)
    return
  }}
}
  

  finishPost(textValue:string){
    this.post.posted_text = textValue
    this.post.user = this.user
    this.post.user_id = Number(this.user.ID)


    this.postService.createPost(this.post).subscribe(
      data=>{
      console.log(data)
      this.cerrar()
    },error=>{console.log(error)})
  }

  cerrar(){
    document.body.style.overflow = "auto"; 
    this.activeModal.close()
  }

}


