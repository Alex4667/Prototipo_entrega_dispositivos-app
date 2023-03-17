import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Loginform!: FormGroup; // Formulario
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Loginform = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });
  }

  get f() { return this.Loginform.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.Loginform.invalid) {
      return;
    }

  }


}
