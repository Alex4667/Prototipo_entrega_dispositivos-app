import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Layouts/navbar/navbar.component';
import { SidebarComponent } from './Components/Layouts/sidebar/sidebar.component';
import { FooterComponent } from './Components/Layouts/footer/footer.component';
import { LoginComponent } from './Components/Views/login/login.component';
import { RegisterComponent } from './Components/Views/register/register.component';
import { DashboardComponent } from './Components/Views/dashboard/dashboard.component';
import { UserRetiredComponent } from './Components/Views/user-retired/user-retired.component';
import { UserTabletComponent } from './Components/Views/user-tablet/user-tablet.component';
import { UserTabledNewComponent } from './Components/Views/user-tabled-new/user-tabled-new.component';
import { UTabRetiredComponent } from './Components/Views/u-tab-retired/u-tab-retired.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
