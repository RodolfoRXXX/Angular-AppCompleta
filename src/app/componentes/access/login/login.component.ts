import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccesoService } from 'src/app/servicios/acceso.service';
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
      email: new FormControl(''),
      pasword: new FormControl(''),
      recuerdame: new FormControl('')
    })
  }

  onSubmit(){
    
  }

  irRegistro(){
    this.visible.emit('registro');
  }

}
