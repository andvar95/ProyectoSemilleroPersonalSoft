import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OldPost } from '../../Models/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postSubs = new Subject<OldPost[]>(); 
  posts:OldPost[] =[] 
  constructor(
    private http:HttpClient
  ) { }

  getAllPosts(){
    return this.http.get<OldPost>(environment.GET_ALL_POSTS_URL)
  }

  getPostbyId(id:number):Observable<OldPost>{
    return this.http.get<OldPost>(`${environment.GET_ALL_POSTS_URL}/${id}`)
  }

  createPost(body:any){
    console.log(body)
    return this.http.post(environment.GET_ALL_POSTS_URL,body)
  }

  getPostByUser(id:number):Observable<OldPost>{
    return this.http.get<OldPost>(`${environment.GET_POST_BY_USER}/${id}`)
  }

  getPagePost(begin:number):Observable<OldPost[]>{
    
    console.log(begin)
   return this.http.get<OldPost[]>(`${environment.GET_ALL_POSTS_URL}?limit=5&offset=${begin}`)
  
  }

  setPosts(posts:OldPost[]){
    this.posts.push(...posts)
    this.postSubs.next(this.posts)
  }

  getPosts(){
    return this.posts
  }

  public getPostSuscription(){
    return this.postSubs.asObservable()
  }





}
