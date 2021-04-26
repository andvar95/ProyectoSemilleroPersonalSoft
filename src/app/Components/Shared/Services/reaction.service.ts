import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(
    private http:HttpClient
  ) { }


  doReaction(body:any){
    console.log(body)
    return this.http.post(environment.REACTIONS_API_URL,body)
  }
}
