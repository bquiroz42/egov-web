import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ContratistaById } from '../../interfaces/ContratistaById';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit, OnDestroy {

  contratistas: ContratistaById[];

  id: number = 6;

  constructor(
    private router: Router,
    private dataService: DataService) {
    }

  ngOnInit(): void {
    if (this.id === null || this.id === 0){
      console.log('No se encontro resultados');
    }
    else{
      this.getContratistaById();
    }
  }

  ngOnDestroy(){
    this.getContratistaById();
  }


  verDocumentos(){
    this.router.navigate(['/documentos']);
  }

  // OBTENER CONTRATISTA POR ID, UTILIZA PROCESO DE CARGA PARA OBTENER LOS DATOS

  getContratistaById(){
  Swal.fire({
    title: 'Obteniendo datos de la búsqueda',
    html: 'Espere por favor...',
    timer: 1500,
    allowOutsideClick: false,
    timerProgressBar: true,
    onBeforeOpen: () => {
      Swal.showLoading();
      this.dataService.getContratistaByid(this.id).subscribe( (data: any) => {
        this.contratistas = data.body;
        console.log(data);
        console.log('ContratistaById');
     } );
    }});
  }

  


}
