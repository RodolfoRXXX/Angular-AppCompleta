import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  peliculas: Pelicula[];

  constructor( private acceso: AccesoService ) { }

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(){
    this.acceso.getPeliculas().subscribe( (data:any) => {
      this.peliculas = data;
    } );
  }

}
