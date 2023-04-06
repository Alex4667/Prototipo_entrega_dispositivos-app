import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(@Inject(DOCUMENT) private document: Document,
    private authService: UsuarioService
  ) { }

  ngOnInit(): void {
  }
  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
  }


}
