import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas: Pelicula[];

  constructor( private acceso: AccesoService ) { }

  ngOnInit(): void {
    this.getListado();
  }

  getListado(){
    this.acceso.getListado().subscribe( (data: Pelicula[]) => {
      this.peliculas = data;
      console.log(data);
    } )
  }

}
