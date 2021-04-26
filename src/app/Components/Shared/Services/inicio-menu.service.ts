import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class InicioMenuService {

  inicio = 1;
  suscripcionVentanas = new Subject<any>();
  constructor() { }

  setWindow(w:number){
    this.inicio = w
    this.suscripcionVentanas.next(this.inicio)
  }

  getWindow(){
    return this.inicio
  }


   getSuscripcionVentanas(){
    return this.suscripcionVentanas.asObservable()
  }
}
