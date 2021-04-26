import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { headers} from 'src/app/Components/Models/Headers'
import {User,Logueduser} from 'src/app/Components/Models/user'
import {RespuestaLogin} from '../../Models/RespuestaLogin'
import { SessionStorageService } from './session-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegAuthService {

  constructor(
    private http:HttpClient,
    private storage:SessionStorageService,
    private router:Router
  ) { }


  /* 
  CreatedAt: "2021-04-19T02:36:01.452Z"
DeletedAt: null
ID: 3
UpdatedAt: "2021-04-19T02:36:01.452Z"
avatar: "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/5.png"
email: "varleo.95@gmail.com"
name: "Andres Varelo"
password: "$2a$08$YBFKVnSqJg/7zPcA9mWOkuzh39PT7ElQ5PKn8vPIQ0ijtEUDPfsrW"
__proto__: Object

  */
  registerUser(user:User){

return new Promise((resolve,reject)=>{   
  return  this.http.post(`${environment.REGISTER_USER_URL}`,JSON.stringify(user),{headers}).subscribe(
      res=>{
        console.log(res)
        resolve(res)
      },
      error=>{
          console.log(error)
          reject(error)
      }
    )
  })

  }

  login(email:string, password:string){
  return new Promise((resolve,reject)=>{
    this.http.post<RespuestaLogin>(`${environment.LOGIN_URL}`,JSON.stringify({email,password}),{headers}).subscribe(
      res=>{
        console.log(res)
        this.storage.guardarToken(res.token);
        this.storage.guardarUsuario(res.user as Logueduser)
        
        this.router.navigate(['home/wall'])
        resolve(res.user as Logueduser)
      },
      error=>{
        console.log(error)
        reject(error)
      }
    )

  })
          
  }



  








}
