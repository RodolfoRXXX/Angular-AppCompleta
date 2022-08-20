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
  idEditSeleccionado: string;

  constructor( private acceso: AccesoService ) { }

  ngOnInit(): void {
    this.acceso.customId.subscribe( id => {
      this.idEditSeleccionado = id;
      this.loading = true;
      this.getPeliculas(); 
    })
  }

  getPeliculas(){
    this.acceso.getPeliculas().subscribe( (data:any) => {
      this.peliculas = data;
      this.loading = false;
    } )
  }

  editar(id: string){
    if(this.idEditSeleccionado == id){
      this.idEditSeleccionado = '';
    } else{
      this.idEditSeleccionado = id;
    }
    this.acceso.setId(this.idEditSeleccionado);
  }

  eliminar(id: string){
    this.acceso.eliminarPelicula(id).subscribe();
  }

}
