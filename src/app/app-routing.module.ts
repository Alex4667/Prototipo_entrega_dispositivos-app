import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { UTabRetiredComponent } from './Pages/u-tab-retired/u-tab-retired.component';
import { UserRetiredComponent } from './Pages/user-retired/user-retired.component';
import { UserTabledNewComponent } from './Pages/user-tabled-new/user-tabled-new.component';
import { UserTabletComponent } from './Pages/user-tablet/user-tablet.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'UserRetired', component: UserRetiredComponent },
  { path: 'UserTabled', component: UserTabletComponent },
  { path: 'UserTabletNew', component: UserTabledNewComponent },
  { path: 'UserTabletRetired', component: UTabRetiredComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
