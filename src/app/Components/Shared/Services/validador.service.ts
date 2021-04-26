import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Errorvalidación } from '../../Models/ErrorValidacio.Interface';


@Injectable({
  providedIn: 'root'
})
export class ValidadorService {

  constructor() { }


  equalsPassword(control:FormControl):Errorvalidación|null{
    //console.log(control)
    
    if(control.value['pass1']===control.value['pass2'] && control.value['pass2'] != ""){
      //console.log("iguales")
      control.get('pass2')?.setErrors(null)
      return null}
    //console.log(" no iguales servicio")
    control.get('pass2')?.setErrors({NoIguales:true} )
    return {NoIguales:true} 
  }


  equalsPass(pass1:string,pass2:string){
    return (formGroup:FormGroup)=>{
      const controlpass1 = formGroup.controls[pass1];
      const controlpass2 = formGroup.controls[pass2];
      if(controlpass1 === controlpass2){
        controlpass2.setErrors(null)

      }
      else{
      controlpass2.setErrors({noCoindiden:true})
      }
    }
  }

}
