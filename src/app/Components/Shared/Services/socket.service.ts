import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  eventSubs = new Subject<any>();
  socket:any;
  event:any;

  constructor() {
    this.socket = new WebSocket(environment.SOCKET_URL);

    this.socket.onopen = (evt:any) =>{
      console.log('Open')
    }

    this.socket.onclose  = (evt:any) =>{
      console.log('Open')
    }

    this.socket.onmessage  = (evt:any) =>{
      //console.log(JSON.parse(evt.data))
      this.event = JSON.parse(evt.data)
      this.eventSubs.next(this.event)
    }

 


   }

   getEvent(){
    return this.event
  }

  public getEventSuscription(){
    return this.eventSubs.asObservable()
  }
}
