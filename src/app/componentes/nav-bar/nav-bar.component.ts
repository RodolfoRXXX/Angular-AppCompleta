import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { AccesoService } from 'src/app/servicios/acceso.service';
import { CommComponentService } from 'src/app/servicios/comm-component.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn: boolean = false;
  user: string = 'admin';
  peliculas: Pelicula[];

  constructor( private acceso: AccesoService, private comm: CommComponentService ) { }

  ngOnInit(): void {
    this.getPeliculas();
    this.comm.customLogger.subscribe( data => {
      (data)?this.isLoggedIn = true:this.isLoggedIn = false;
      data?this.user = data:'';
    } )
  }

  getPeliculas(){
    this.acceso.getPeliculas().subscribe( (data:any) => {
      this.peliculas = data;
    } );
  }

}
