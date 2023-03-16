import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/Views/dashboard/dashboard.component';
import { LoginComponent } from './Components/Views/login/login.component';
import { RegisterComponent } from './Components/Views/register/register.component';
import { UserRetiredComponent } from './Components/Views/user-retired/user-retired.component';
import { UserTabledNewComponent } from './Components/Views/user-tabled-new/user-tabled-new.component';
import { UserTabletComponent } from './Components/Views/user-tablet/user-tablet.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'UserRetired', component: UserRetiredComponent },
  { path: 'UserTabled', component: UserTabletComponent },
  { path: 'UserTabletNew', component: UserTabledNewComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
