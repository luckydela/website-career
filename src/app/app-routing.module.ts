import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DptComponent } from './dpt/dpt.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdshComponent } from './userdsh/userdsh.component';
import {AuthGuard} from './service/authguard';
import {TopnavComponent} from './topnav/topnav.component';
import {AdminnavComponent} from './adminnav/adminnav.component';
import {NewapplicantComponent} from './newapplicant/newapplicant.component';
import { AddjobComponent } from './addjob/addjob.component';



const routes: Routes = [
  {path: '', component: DptComponent},
  {path:'user',component: TopnavComponent},

  {path:'ecl@hrlogin', component: LoginComponent},
  {path: '', component: AdminnavComponent,
   canActivateChild: [AuthGuard],
    children:[
      {path: 'adminuser@ecl', component: NewapplicantComponent},
      {path: 'admindsh', component: AdminComponent},
      {path:'profile', component: ProfileComponent},
      {path:'addjob',  component:AddjobComponent }
    ]
},
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent = [DptComponent, LoginComponent,TopnavComponent, AdminnavComponent,
   AdminComponent, ProfileComponent, UserdshComponent, NewapplicantComponent, AddjobComponent]
