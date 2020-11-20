import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private form: FormBuilder, private router: Router) {

    this.loginForm = this.form.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      contraseña: ['', [Validators.required, Validators.minLength(4)]]

    });
  }

  ngOnInit(): void {
  }



  // INICIA LA SESION DEL USUARIO, VALIDA SI EL USUARIO EXISTE O NO
  loginUser(){
    if (this.loginForm.invalid){ return ; }
    const { usuario, contraseña } = this.loginForm.value;

    this.router.navigate(['/inicio']);

  }

}
