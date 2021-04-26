import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Logueduser } from '../../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient
  ) { }

  getUsers():Observable<Logueduser[]>{
    return this.http.get<Logueduser[]>(`${environment.REGISTER_USER_URL}`)
  }

  search(txt:string):Observable<Logueduser[]>{
    return this.http.get<Logueduser[]>(`${environment.SEARCH_USER}${txt}`)
  }

  getUser(id:number){
    console.log("trayend"+id)
    return this.http.get(`${environment.REGISTER_USER_URL}/${id}`)
  }
}
