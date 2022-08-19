import { Component, OnInit } from '@angular/core';
import { Aviso } from 'src/app/entidades/aviso';
import { AccesoService } from 'src/app/servicios/acceso.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {
  estado: boolean = true;
  texto: string = "Los cambios se realizaron con éxito!";
  activo: boolean = false;

  constructor( private acceso: AccesoService ) { }

  ngOnInit(): void {
    this.acceso.customAviso.subscribe( (obj: Aviso) => {
      this.estado = obj.estado;
      this.texto = obj.texto;
      this.activo = obj.activo;
      this.activarNotificacion();
    } )
  }

  activarNotificacion(){
    setTimeout(() => {
      this.activo = false;
    }, 4000);
  }

}


