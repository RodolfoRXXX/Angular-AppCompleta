import { Component, OnInit } from '@angular/core';
import { Pedidas } from 'src/app/entidades/pedidas';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-lista-maspedidas',
  templateUrl: './lista-maspedidas.component.html',
  styleUrls: ['./lista-maspedidas.component.css']
})
export class ListaMaspedidasComponent implements OnInit {

  loading: boolean;
  masPedidas: Pedidas[];

  constructor( private acceso: AccesoService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getMasPedidas();
  }

  getMasPedidas(){
    this.acceso.getPedidas().subscribe( (data:Pedidas[]) => {
      data = data.sort( (a, b) => b.cantidad - a.cantidad );
      this.masPedidas = [ data[0], data[1], data[2], data[3], data[4] ];
      this.loading = false;
    } )
  }

}
