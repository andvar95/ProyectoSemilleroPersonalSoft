import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  guardarToken(token:string){
    window.sessionStorage.setItem('token-user',token)
  }

  obtenerToken():string|null{
    return window.sessionStorage.getItem('token-user')
  }

  guardarUsuario(user:any){
    window.sessionStorage.setItem('app-user',JSON.stringify(user))
  }

obtenerUsuario(){
    return JSON.parse(window.sessionStorage.getItem('app-user') || '{}')
  }




}
