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
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: DashboardComponent },

  {
    path: 'home',
    loadChildren: () => import('./Pages/page.module').then(m => m.PagesModule)
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
