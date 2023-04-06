import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Registerform!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private _route: Router,
    private _usuarioService: UsuarioService,) { }

  ngOnInit(): void {
    this.Registerform = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  get f() { return this.Registerform.controls; }


  registrar() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.Registerform.invalid) {
      return;
    }

    this._usuarioService.register(this.Registerform.value).subscribe({
      next: (data) => {
        console.log(data.msg);
        this._route.navigateByUrl('/login')

        // Si la solicitud fue exitosa
        Swal.fire({
          title: 'Registro exitoso!',
          text: 'El usuario ha sido registrado correctamente.',
          icon: 'success'
        });

      },

      error: (error) => {
        // Si la solicitud falla, muestra una alerta de error
        Swal.fire({
          title: 'Error!',
          text: 'No se ha podido registrar el usuario.',
          icon: 'error'
        });

        console.log(error);
      }
    });







  }
}

