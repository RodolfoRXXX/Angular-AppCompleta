import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { AccesoService } from 'src/app/servicios/acceso.service';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-lista-edicion',
  templateUrl: './lista-edicion.component.html',
  styleUrls: ['./lista-edicion.component.css']
})
export class ListaEdicionComponent implements OnInit {

  loading: boolean;
  peliculas: Pelicula[];

  constructor( private acceso: AccesoService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getPeliculas();
  }

  getPeliculas(){
    this.acceso.getPeliculas().subscribe( (data:any) => {
      this.peliculas = data;
      this.loading = false;
    } )
  }

}
