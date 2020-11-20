import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import { Contratista } from '../../interfaces/Contratista';
import { ContratistasDocumentosImagenes } from '../../interfaces/ContratistasDocumentosImagenes';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {

  tituloHeader: string = 'valle hermoso';

  @Input() contratistasDocumentosImagenes: ContratistasDocumentosImagenes;
  usuario: Usuario[];
  usuarios: Usuario[];
  id: number = 145;
  progreso: number;
  fotoSeleccionada: File;


  constructor(private router: Router, private dataService: DataService, private modalService: ModalService ) {

   }

  ngOnInit(): void {
  this.getUsuarioById();

  this.getAllUsuarios();
  }

  getUsuarioById(){
    this.dataService.getUsuario(this.id).subscribe( (data: any) => {
      this.usuario = data.body;
      console.log(data.body);
    });
  }

  getAllUsuarios(){
    this.dataService.getAllUsuarios().subscribe( data => {
      this.usuarios = data;
      console.log(data);
    });
  }

  seleccionarFoto(event){

    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
    console.log(this.fotoSeleccionada);
    if (this.fotoSeleccionada.type.indexOf('image') < 0 )  {
      Swal.fire('Error archivo seleccionado', `El tipo de archivo no es una imagen, selecciona una imagen`, 'error');
      this.fotoSeleccionada = null;
    }

  }


  subirFotoSeleccionada(){


    if (!this.fotoSeleccionada){
        Swal.fire('Error al subir foto', `Debe seleccionar una foto para subir`, 'error');
      }else{
        this.dataService.subirFoto(this.fotoSeleccionada, this.contratistasDocumentosImagenes.id)
        .subscribe( event => {

        if (event.type === HttpEventType.UploadProgress){
          this.progreso = Math.round((event.loaded / event.total) * 100);
        } else if (event.type === HttpEventType.Response){
          let response: any = event.body;
          this.contratistasDocumentosImagenes = response as ContratistasDocumentosImagenes;
          this.modalService.notificarUpload.emit(
              this.contratistasDocumentosImagenes
          );
          Swal.fire('La foto se ha subido correctamente', response.mensaje, 'success');
          // Swal.fire('La foto se ha subido correctamente', `La foto se ha subid con exito ${this.cliente.foto}`, 'success');
        };
        });
   }

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '¡Imagen subida!',
    text: '¡Se ha subido la imagen correctamente!',
    showConfirmButton: false,
    timer: 2000
  });
}
}
