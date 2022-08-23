import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entidades/user';
import { emailValidator } from 'src/app/modulo/funciones/funciones';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  estadoSmt: string;
  @Output() visible = new EventEmitter<string>();

  form: FormGroup;

  constructor( private auth: AuthService ) { 
    this.estadoSmt = 'registro';
  }

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
      nivel: new FormControl('',
        [
          Validators.required
        ])
      //recuerdame: new FormControl('')
    })
  }

  onRegister(){
    this.estadoSmt = "load";
    delete this.form.value.passwordRep;
    this.form.value.token = '';
    console.log(this.form.value);
    this.auth.setNewUser(this.form.value).subscribe( (data: User) => {
      if(data.email === this.form.value.email){
        this.estadoSmt = "ok";
      } else{
        this.estadoSmt = "error";
      }
    } )
  }

  actualizarSmt(){
    (this.estadoSmt == 'error')?(this.estadoSmt = 'ingreso'):'';
  }

  irLogin(){
    this.visible.emit('login');
  }

}
