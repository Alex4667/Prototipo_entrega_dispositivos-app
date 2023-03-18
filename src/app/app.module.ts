import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Layouts/navbar/navbar.component';
import { SidebarComponent } from './Components/Layouts/sidebar/sidebar.component';
import { FooterComponent } from './Components/Layouts/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { UserRetiredComponent } from './Pages/user-retired/user-retired.component';
import { UserTabletComponent } from './Pages/user-tablet/user-tablet.component';
import { UserTabledNewComponent } from './Pages/user-tabled-new/user-tabled-new.component';
import { UTabRetiredComponent } from './Pages/u-tab-retired/u-tab-retired.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UserRetiredComponent,
    UserTabletComponent,
    UserTabledNewComponent,
    UTabRetiredComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
