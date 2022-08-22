import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/modulo/funciones/funciones';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() visible = new EventEmitter<string>();

  form: FormGroup;

  constructor( private auth: AuthService ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          emailValidator()
        ]),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]),
      passwordRep: new FormControl('',
        [
          Validators.required
        ]),
      //recuerdame: new FormControl('')
    })
  }

  onRegister(){
    console.log(this.form.value);
  }

  irLogin(){
    this.visible.emit('login');
  }

}
