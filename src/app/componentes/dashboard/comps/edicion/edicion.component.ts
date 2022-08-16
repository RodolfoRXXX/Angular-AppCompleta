import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/entidades/pelicula';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  activar: boolean;
  loading: boolean;
  pelicula: Pelicula;
  formulario: FormGroup;

  constructor( private acceso: AccesoService ) { }

  ngOnInit(): void {
    this.activar = true;
  }

  creaFormulario(){
    this.formulario = new FormGroup({
      foto: new FormControl('',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(200)
      ]),
      titulo: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      genero: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      year: new FormControl('',
      [
        Validators.required,
        Validators.min(1900),
        Validators.max(2050)
      ]),
      imdb: new FormControl('',
      [
        Validators.required,
        Validators.max(10.1)
      ]),
      sinopsis: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(500)
      ]),
      stock: new FormControl('',
      [
        Validators.required,
        Validators.max(10000)
      ]),
      precio: new FormControl('',
      [
        Validators.required,
        Validators.max(1000000)
      ])
    });
    this.loading = false;
  }

  activarFormulario(){
    this.activar = false;
    this.loading = true;
    this.creaFormulario();
  }

  onSubmit(){
    console.log(this.formulario.value);
  }

}
