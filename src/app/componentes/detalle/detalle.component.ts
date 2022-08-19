import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pelicula } from 'src/app/entidades/pelicula';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  pelicula: Pelicula;
  id: string|null;
  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute, private acceso: AccesoService ) { };

  ngOnInit(): void {
    this.loading = true;
      this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
        this.id = params.get('id');
        if(this.id){
          this.getPelicula( this.id );
        }
      });
  }


  getPelicula( id: string ){
    this.acceso.getPelicula(id).subscribe( (data: any) => {
      this.loading = false;
      this.pelicula = {...data};
    } )
  }

  rentaPelicula( post: Pelicula ){
    post.stock--;
    this.acceso.rentaPelicula(post).subscribe()
  }

}
