import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, throwError } from 'rxjs';
import { Estreno } from '../entidades/estrenos';
import { Pedidas } from '../entidades/pedidas';
import { Pelicula } from '../entidades/pelicula';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {

  url: string = "https://62e9b0c001787ec7121b68cf.mockapi.io/peliculas";
  urlPedidas: string = "https://62e9b0c001787ec7121b68cf.mockapi.io/alquileres";
  urlEstrenos: string = "https://62e9b0c001787ec7121b68cf.mockapi.io/estrenos";

  constructor(private http: HttpClient ) { }

  //Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  //Manejo de errores
  private handleError( error: HttpErrorResponse ){
    if( error.error instanceof ErrorEvent ){
      //error del lado cliente
      console.error('Ocurrió un error', error.error.message);
    } else{
      //error del lado servidor
      console.error(`El backend retornó el código de error ${error.status}. El cuerpo del mensaje de error es ${error.message}`);
    }
    return throwError(() => new Error('Algo malo sucedió. por favor intenta más tarde.'));
  }

  //Comunicación entre componentes hermanos
    //Lista de edición genera evento y componente edición detecta cambio y id de la película a editar
    private id = new BehaviorSubject<string>('');
    public customId = this.id.asObservable();

    public setId( idEdit: string ):void{
      this.id.next(idEdit);
    }

  //Peticiones al servidor
  //GET
  getPeliculas(){
    return this.http.get<Pelicula[]>( this.url )
               .pipe(
                catchError(this.handleError)
               );
  }

  getPelicula( id: string ){
    return this.http.get<Pelicula>( this.url + '/' + id )
               .pipe(
                catchError(this.handleError)
               );
  }

  getPedidas(){
    return this.http.get<Pedidas[]>( this.urlPedidas )
               .pipe(
                catchError(this.handleError)
               );
  }

  getEstrenos(){
    return this.http.get<Estreno[]>( this.urlEstrenos )
               .pipe(
                catchError(this.handleError)
               );
  }

  //POST
  creaPelicula( post: Pelicula ){
    return this.http.post<Pelicula>(this.url, post, this.httpOptions)
               .pipe(
                catchError(this.handleError)
               );
  }


  //PUT
  rentaPelicula( post: Pelicula ){
    return this.http.put<Pelicula>( this.url + '/' + post.id, post, this.httpOptions )
               .pipe(
                catchError(this.handleError)
               );
  }

  editaPelicula( post: Pelicula ){
    return this.http.put<Pelicula>( this.url + '/' + post.id, post, this.httpOptions )
               .pipe(
                catchError(this.handleError)
               );
  }

  //DELETE
  eliminarPelicula( id: string ){
    return this.http.delete( this.url + '/' + id, this.httpOptions )
               .pipe(
                catchError(this.handleError)
               );
  }

}
