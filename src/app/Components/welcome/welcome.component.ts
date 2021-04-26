import { Component, OnInit } from '@angular/core';
import { InicioMenuService } from '../Shared/Services/inicio-menu.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  opcion:any = 0;

  suscripcionMenu = this.menu.getSuscripcionVentanas().subscribe(result=>{
    console.log("cambio")
    this.opcion = result
  })


  constructor(
    private menu:InicioMenuService
  ) { 
    
  }
  
  ngOnInit(): void {

    this.opcion = this.menu.getWindow()
 
  }


  ngOnDestroy():void{
    if(this.suscripcionMenu){
      this.suscripcionMenu.unsubscribe()
    }

}

}
