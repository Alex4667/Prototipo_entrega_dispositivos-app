import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Registerform!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Registerform = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  get f() { return this.Registerform.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.Registerform.invalid) {
      return;
    }


  }

}
