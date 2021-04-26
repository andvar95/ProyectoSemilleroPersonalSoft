import { Component, OnInit } from '@angular/core';
import { InicioMenuService } from '../../Shared/Services/inicio-menu.service';
import { RegAuthService } from '../../Shared/Services/reg-auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  errorEnable = false
  errorMsj =""
  passField:any
  show = false

  constructor(
    private menu:InicioMenuService,
    private loginService:RegAuthService
  ) { }
  user = {
    email:"",
    password:""
  }
  putEmail = false
  putPassword = false

  ngOnInit(): void {
  }

  login(){
    const {email,password} = this.user
  
    if(email!=="" && password !==""){
      this.loginService.login(email,password).then((data:any)=>{
        console.log(data)
      }).
      catch(error=>{
        console.log("no ues")
        console.log(error)

        if (error.error === "User does not exist"){
          this.errorEnable = true
          this.errorMsj ="Usuario no existe"
        }
        else if (error.error === "Wrong password"){
          this.errorEnable = true
        this.errorMsj ="Contraseña Errónea"
        }
        this.showError()
 
      })

    }
     if(email==="" && password !==""){
      this.putEmail = true
      this.showError()

    }
     if(email!=="" && password ===""){
      this.putPassword = true
      this.showError()
    }
     if(email==="" && password ===""){
      this.errorEnable = true
      this.errorMsj = "Ingrese ambos campos"
      this.showError()
    }
    
    //
  }

  irRegistro(){
    console.log("entre")
    this.menu.setWindow(2)
  }


  showError(){
          setTimeout(()=>{
            this.errorEnable = false
            this.putPassword = false
            this.putEmail = false
            
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
