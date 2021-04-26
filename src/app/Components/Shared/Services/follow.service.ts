import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(
    private http:HttpClient
  ) { }

  follow(body:any){
    return this.http.post(environment.FOLLOW_USER,body)
}
}
