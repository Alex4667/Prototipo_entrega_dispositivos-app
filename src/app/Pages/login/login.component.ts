import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/Services/jwt.service';
import { UsuarioService } from 'src/app/Services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Loginform!: FormGroup; // Formulario
  submitted = false;
  message: string = '';
  user_id: number = 0;
  userError: string = '';
  passwordError: string = '';


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
    this.userError = ''; // limpiar el mensaje de error del usuario
    this.passwordError = ''; // limpiar el mensaje de error de la contraseña  

    this._usuarioService.login(this.Loginform.value).subscribe({
      next: (data) => {
        if (data.status == 'not_found') {
          this.userError = data.message;
          console.log(this.userError);

        } else if (data.status == 'error_password') {
          this.passwordError = data.message;
          console.log(this.passwordError);

        } else if (data.status == 'ok') {
          localStorage.setItem('token', data.access_token);
          this.user_id = data.user_id
          this.message = data.message;

          Swal.fire({
            title: `${this.message}`,
            showConfirmButton: false,

          });
          this._route.navigate(['/home'])
        }
      },
      error: (error) => {
        // Si la solicitud falla
        Swal.fire({
          title: 'Error!',
          text: 'No se ha podido establecer la conexión.',
          icon: 'error'
        });
        console.log(error);
      }
    });

  }
}
