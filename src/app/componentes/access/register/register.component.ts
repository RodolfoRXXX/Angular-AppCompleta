import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() visible = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  irLogin(){
    this.visible.emit('login');
  }

}
