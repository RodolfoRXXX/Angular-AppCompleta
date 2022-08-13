import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  url: string = "https://62e9b0c001787ec7121b68cf.mockapi.io/peliculas";

  constructor(private http: HttpClient ) { }

  getListado(){
    return this.http.get( this.url )
  }

}
