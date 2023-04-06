import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/Services/jwt.service';
import { UsuarioService } from 'src/app/Services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Loginform!: FormGroup; // Formulario
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private _route: Router,
    private _usuarioService: UsuarioService,
    private _jwt: JwtService
  ) { }

  ngOnInit(): void {
    // Validar los datos de inicio de sesión
    this.Loginform = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() { return this.Loginform.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.Loginform.invalid) {

      return;
    }

    this._usuarioService.login(this.Loginform.value).subscribe({
      next: (data) => {
        this._jwt.login(data.access_token);
        void this._route.navigateByUrl('/home');
      }
    });

  }
}
