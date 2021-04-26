import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../../Models/Comments.interface';
import { OldPost } from '../../Models/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http:HttpClient
  ) { }

  getAllComments(id:number):Observable<OldPost>{

      return this.http.get<OldPost>(`${environment.GET_ALL_POSTS_URL}/${id}`)
  }

  createComment(body:any){

    return this.http.post(`${environment.COMMENTS_API_URL}`,body)

  }

}
