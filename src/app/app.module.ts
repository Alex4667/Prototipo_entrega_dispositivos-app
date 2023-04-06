import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Rutas principales
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Layouts/navbar/navbar.component';
import { SidebarComponent } from './Components/Layouts/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EntregaInterceptor } from './Interceptors/entrega.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,



  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EntregaInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
