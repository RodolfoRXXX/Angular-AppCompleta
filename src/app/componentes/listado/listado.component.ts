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
  loading: boolean;

  constructor( private acceso: AccesoService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getListado();
  }

  getListado(){
    this.acceso.getPeliculas().subscribe( (data: any) => {
      this.peliculas = data;
      this.loading = false;
    } )
  }

  rentaPelicula( post: Pelicula ){
    post.stock--;
    this.acceso.rentaPelicula(post).subscribe({
      next: () => {
        this.acceso.setAviso(
          {estado: true, texto: "La película se ha rentado con éxito!", activo: true}
        )
      },
      error: () => {
        this.acceso.setAviso(
          {estado: false, texto: "Ocurrió un problema al rentar la película.", activo: true}
        )
      },
      complete: () => {
        this.sumaPelicula(post);
      }
    })
  }

  sumaPelicula( post: Pelicula ){
    post.cantidad++;
    this.acceso.sumaPelicula(post).subscribe();
  }

}
