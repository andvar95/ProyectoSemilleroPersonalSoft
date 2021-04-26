import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './Components/Forms/login-form/login-form.component';
import { RegisterFormComponent } from './Components/Forms/register-form/register-form.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { WallPostsComponent } from './Components/wall-posts/wall-posts.component';
import {routing} from './Components/Routes/app.router';
import { CardPostComponent } from './Components/card-post/card-post.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AdvertComponent } from './Components/advert/advert.component'
import { InterceptorService } from './Components/Shared/Services/interceptor.service';
import { CardUserComponent } from './Components/card-user/card-user.component';
import {FormCreatePostComponent} from './Components/Forms/form-create-post/form-create-post.component';
import { CommentTemplateComponent } from './Components/comment-template/comment-template.component';
import { NewpostTemplateComponent } from './Components/newpost-template/newpost-template.component'
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import  {AngularFireStorageModule} from '@angular/fire/storage';
import { FormcreategroupComponent } from './Components/Forms/formcreategroup/formcreategroup.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { PostComponent } from './Components/post/post.component';
import { ReversePipe } from './Components/Shared/Pipes/reverse.pipe';
import { GroupdetailComponent } from './Components/groupdetail/groupdetail.component';
import { CardgroupComponent } from './Components/cardgroup/cardgroup.component';
import { NotiNavbarComponent } from './Components/noti-navbar/noti-navbar.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    WelcomeComponent,
    NavbarComponent,
    WallPostsComponent,
    CardPostComponent,
    ProfileComponent,
    MenuComponent,
    AdvertComponent,
    CardUserComponent,
    FormCreatePostComponent,
    CommentTemplateComponent,
    NewpostTemplateComponent,
    FormcreategroupComponent,
    NotificationComponent,
    PostComponent,
    ReversePipe,
    GroupdetailComponent,
    CardgroupComponent,
    NotiNavbarComponent
 
  ],
  imports: [
  BrowserModule,
  HttpClientModule,  
  FormsModule,
  ReactiveFormsModule,
  routing,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireStorageModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
