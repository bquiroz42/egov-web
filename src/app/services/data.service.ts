import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Red } from '../config/red';
import { catchError, debounceTime, map, sample, sampleTime, throttleTime } from 'rxjs/operators';
import { Usuario } from '../interfaces/Usuario';
import { Observable, Observer, throwError } from 'rxjs';
import { Img } from 'pdfmake-wrapper';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  localhost: string;

  constructor(
    private http: HttpClient,
    private red: Red
    ) {
    this.localhost = red.localhost;
  }

  /* CONTRATO  */
  getContrato(folio: number){
    const url = this.localhost + '/egovi-api/contratos/contrato?area=a1&tipo=co&categoria=op&folio=' + folio;
    return this.http.get(url).pipe(
      catchError(e => {

        /*
        SE MUESTRA ESTE MENSAJE SI LA BUSQUEDA DEL USUARIO
        NO GENERA NINGUN RESULTADO
        */
       if ( e.status === 400) {
        Swal.fire('Error en la búsqueda', 'La búsqueda que realizo no genero ningún resultado - Pruebe a buscar otra cosa', 'error');
        return throwError(e);
       }

       Swal.fire('Error de conexión', 'Hay una posible desconexión con el servidor, consulte a soporte técnico', 'error');
       return throwError(e);
      })
    );
  }

  /* CONTRATISTA */
  getContratista(termino: string) {
    const url = this.localhost + '/egovi-api/contratista/search?term=' + termino;
    return this.http.get(url).pipe(
      catchError(e => {

        /*
        SE MUESTRA EL SIGUIENTE MENSAJE SI LA BÚSQUEDA DEL USUARIO
        NO GENERO NINGÚN RESULTADO
        */
         if ( e.status === 400) {
          Swal.fire('Error en la búsqueda', 'La búsqueda que realizo no genero ningún resultado - Pruebe a buscar otra cosa', 'error');
          return throwError(e);
         }

         console.error('Se ha producido un error con el servidor, posible desconexión - Llame a Soporte técnico de Complise Sistemas');
         return throwError(e);


      })
    );
  }

  getContratistaByid(id: number){
    const url = this.localhost + '/egovi-api/contratista/' + id;
    return this.http.get(url).pipe(
      catchError(e => {

        /*
        SE MUESTRA EL SIGUIENTE MENSAJE SI LA BÚSQUEDA DEL USUARIO
        NO GENERO NINGÚN RESULTADO
        */

       if ( e.status === 400) {
        Swal.fire('Error en la búsqueda', 'La búsqueda que realizo no genero ningún resultado - Pruebe a buscar otra cosa', 'error');
        return throwError(e);
       }

       Swal.fire('Error de conexión', 'Hay una posible desconexión con el servidor u otro problema relacionado, consulte a soporte técnico', 'error');
       return throwError(e);
      })
    );
  }

  // USUARIOS

  getUsuario(id: number){
    const url = this.localhost + '/egovi-api/usuario/buscarUsuario/' + id;
    return this.http.get(url).pipe(
      catchError(e => {
        Swal.fire('Error de conexion', 'Hay una posible desconexión con el servidor u otro problema relacionado, consulte a soporte técnico', 'error');
        return throwError(e);
      })
    );;
  }

  getAllUsuarios(){
    const url = this.localhost + '/egovi-api/usuario/usuarios';
    return this.http.get(url).pipe(
      map( (response) => response as Usuario[] ),
        catchError(e => {
          Swal.fire('Error de conexión', 'Hay una posible desconexión con el servidor u otro problema relacionado, consulte a soporte técnico', 'error');
          return throwError(e);
        })
      );
  }

  /*create(usuario: Usuario): Observable<Usuario>{
  return this.http.post(this.localhost)
  }
  */

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>>{

  let formData = new FormData();
  formData.append('archivo', archivo);
  formData.append('id', id);
  const req = new HttpRequest('POST', `${this.localhost}/upload`, formData, {
    reportProgress: true
  });
  return this.http.request(req);
  }


/* --------------------------------------------------------------------------------------------------- */

  /* CONVIERTE LA IMAGEN */
  getBase64ImageFromUrl(url: string){
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if ( !img.complete ) {
          img.onload = () => {
            observer.next(this.getBase64Image(img));
            observer.complete();
          };
          img.onerror = (err) => {
            observer.error(err);
          }
      } else {
        observer.next(this.getBase64Image(img));
      }
    });
  }

  /* CONVIERTE LA IMAGEN A PNG */
  getBase64Image(img: HTMLImageElement ) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

}
