import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Models/user';
import { InicioMenuService } from '../../Shared/Services/inicio-menu.service';
import { RegAuthService } from '../../Shared/Services/reg-auth.service';
import { ValidadorService } from '../../Shared/Services/validador.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  form:FormGroup;
  user:User = {
    name:'',
    email:'',
    password:''
  };
  
  erroMsj = ""
  errorEnable = false
  putName=false
  putEmail=false
  putPass1 = false
  putPass2 = false
  passField:any
  show =false
  

  constructor(
    private menu:InicioMenuService,
    private formBuilder:FormBuilder,
    private servicioValidador:ValidadorService,
    private registerService:RegAuthService,
    private router:Router
  ) { 

this.form = formBuilder.group({
  name:['',[Validators.required,Validators.minLength(3)]],
  //apellido:['',[Validators.required,Validators.minLength(3)]],
   email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
   passwords:this.formBuilder.group({
    pass1:['',[Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$")]],
    //the password must content a lowercase, one upppercase and o number 
    pass2:['',[Validators.required]]      
   },{
     validator:this.servicioValidador.equalsPassword
   })
     
})

  }

  ngOnInit(): void {
    console.log("registro")
  
  }

  irLogin(){
    this.menu.setWindow(1)
  }

  registrar(){
    console.log(this.form.value)

    this.putName=false
    this.putEmail=false
    this.putPass1 = false
    this.putPass2 = false

   this.user = {
    name: this.form.value.name,
    email: this.form.value.email,
    password: this.form.value.passwords['pass1']
    }

if(this.form.valid) {
    this.registerService.registerUser(this.user).
    then((data:any)=>{
      console.log(data)
      this.irLogin()
      

    }).
    catch(error=>{

      if(error.error === "Property name must have 5 characters at least"){
            this.erroMsj ="Debe llenar los campos"
          }  
      else if(error.error =="Email format error"){
        this.erroMsj ="Ingrese un Correo valido"
      }

      else if(error.error ==" Password must have 6 characters at least"){
        this.erroMsj ="Ingrese un contraseña de al menos 6 carácteres"        
      }

      else if(error.error =="Duplicated Email"){
        this.erroMsj = "Ya existe este correo"
      }
    
    this.showError()
    })
  }
  else{
   if(this.form.value.name === ""){
     this.putName= true
   }

   if(this.form.value.email === ""){
    this.putEmail= true
  }
  if(this.form.value.passwords['pass1'] ===""){
    this.putPass1 = true

  }

  if(this.form.value.passwords['pass1'] !=="" && this.form.value.passwords['pass2'] ===""){
    this.putPass2 = true
  }

  setTimeout(()=>{
    this.putName=false
    this.putEmail=false
    this.putPass1 = false
    this.putPass2 = false
  },10000)

  }



  console.log( this.erroMsj)
      

  }

  get verifyPass(){
    const password = this.form.controls.passwords as FormGroup;
    //console.log(password.controls.pass2)
    return password.controls.pass2?.hasError('NoIguales') && password.controls.pass2.value !== "" 
  }

  get validPass(){
    const password = this.form.controls.passwords as FormGroup;

      return password.controls.pass1.valid && !password.controls.pass2?.hasError('NoIguales')
  }

  showError(){
    this.errorEnable = true
          setTimeout(()=>{
            this.errorEnable = false
          },10000)
  }

  showPassword(){
    this.passField =  document.querySelector("#password")
    if(this.passField?.getAttribute('type') ==="password"){
      this.passField.setAttribute('type','text')
      this.show = true
    }
    else{
     this.passField?.setAttribute('type','password')
     this.show = false
    }
 
   }


}
