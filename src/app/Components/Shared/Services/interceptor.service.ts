import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private storage:SessionStorageService,
    private router:Router
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token  =this.storage.obtenerToken()
    
    if(!Boolean(token)){
      return next.handle(req)
    }

    const clon = req.clone({
      headers:req.headers
      .set('Content-type','application/json')
      .set('Authorization',`Bearer ${token}`),
    })
    return next.handle(clon).pipe(
      tap(()=>{},(error:any)=>{
        if(error instanceof HttpErrorResponse){
          if(error.status !==401){
            console.log("Correcto")
            return
          }
          console.log("Interceptor")
           this.router.navigate(['/login']);
        }
      })
    )

  }
}
