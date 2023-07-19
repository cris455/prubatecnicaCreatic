import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { login } from '../../../auth/user.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private myForm: FormGroup;

  constructor(private store:Store) { 
    this.myForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('', Validators.required),
      // otros campos del formulario
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Simulando una respuesta de inicio de sesión exitoso
    const correo =  this.myForm.get('email')?.value ;
    const token = this.myForm.get('password')?.value ;

    // Disparar la acción de inicio de sesión
    this.store.dispatch(login({ username: correo, token }));
  }

}
