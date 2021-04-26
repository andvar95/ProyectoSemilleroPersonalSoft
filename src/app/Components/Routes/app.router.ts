import { RouterModule, Routes } from "@angular/router";
import { WallPostsComponent } from "../wall-posts/wall-posts.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import {ProfileComponent} from '../profile/profile.component'
import { MenuComponent } from "../menu/menu.component";
import { FormCreatePostComponent } from "../Forms/form-create-post/form-create-post.component";
import { FormcreategroupComponent } from "../Forms/formcreategroup/formcreategroup.component";
import { PostComponent } from "../post/post.component";
import { GroupdetailComponent } from "../groupdetail/groupdetail.component";
import { SaveContentService } from "../Shared/Services/save-content.service";





const appRouters:Routes = [
    {path:'login',component:WelcomeComponent},
    {path:'home',component:MenuComponent,
    children:[
        {path:'wall',component:WallPostsComponent,canActivate:[SaveContentService]},
        {path:'profile',component:ProfileComponent,canActivate:[SaveContentService]},
        {path:'post',component:PostComponent,canActivate:[SaveContentService]},
        {path:'group',component:GroupdetailComponent,canActivate:[SaveContentService]}
    ]},
 
    {path:'modal',component:FormCreatePostComponent,canActivate:[SaveContentService]},
    {path:'createGroup',component:FormcreategroupComponent,canActivate:[SaveContentService]},
    {path:'**',redirectTo:'login'},


]

export const routing = RouterModule.forRoot(appRouters)