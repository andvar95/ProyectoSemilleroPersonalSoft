import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SaveContentService implements CanActivate {

  constructor(
    private storage:SessionStorageService,
    private router:Router,
  ) { }

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ){
    if(Boolean(this.storage.obtenerToken())){
          return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
