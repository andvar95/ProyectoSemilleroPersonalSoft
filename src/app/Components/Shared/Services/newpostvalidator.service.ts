import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Errorvalidación } from '../../Models/ErrorValidacio.Interface';

@Injectable({
  providedIn: 'root'
})
export class NewpostvalidatorService {

  constructor() { }


  atLeastOneField(form:FormGroup):Errorvalidación|null{

  
    if(Boolean(form.value['posted_text']) || Boolean(form.value['image_url'])){
      form.setErrors(null)
      return null
    }
    else{
      form.setErrors({empty:true})
      return {empty:true}

    }
    
  }
}
