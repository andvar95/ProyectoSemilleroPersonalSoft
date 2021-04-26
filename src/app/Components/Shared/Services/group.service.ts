import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Group } from '../../Models/Group.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http:HttpClient
  ) { }


  createGroup(body:any){
      return this.http.post(environment.GROUP_API_URL,body)
  }

  getGroups():Observable<Group[]>{
    return this.http.get<Group[]>(environment.GROUP_API_URL)
  }

  addUser(body:any){
    return this.http.post(environment.ADD_USER_GROUP,body)
  }
}
