import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/modulo/funciones/funciones';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  @Output() visible = new EventEmitter<string>();

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
      //recuerdame: new FormControl('')
    })
  }

  onSubmit(){
    console.log(this.form.value);
  }

  irRegistro(){
    this.visible.emit('registro');
  }

}
