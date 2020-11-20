import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Img, Txt, Columns, Table, QR } from 'pdfmake-wrapper';
import { DataService } from '../../services/data.service';
import { Contrato } from '../../interfaces/Contrato';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  money = '2,122,323';
  date = '24/05/2019';

  estatus = 'En revisión' ;
  responsable = 'LIC. GONZALO GONZALEZ MORENO';

  repLegal = [
    {nombre: 'JOSÉ ANTONIO LÓPEZ GARZA'},
    {nombre: 'VICTOR VILLAREAL ESPINOZA'}
  ];

  socios = [
    {nombre: 'JOSÉ ANTONIO LÓPEZ GARZA'},
    {nombre: 'VICTOR VILLAREAL ESPINOZA'}
  ];

  documentos = [
    {nombre: 'Ficha Tecnica'}, {nombre: 'Documentos Padrón'},
    {nombre: 'Anexos Oficiales'}, {nombre: 'Contratos y Anexos'}
  ];

  contrato: Contrato;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  this.getContrato();
  }


  getContrato(){
    this.dataService.getContrato(2).subscribe( (data: any) => {
      this.contrato = data.body.estatus;
      console.log(this.contrato);
    });
  }

  verSeguimiento(){
    Swal.fire('Seguimiento', 'Ver los seguimientos del contrato actual', 'info');
  }

  /*
  PAGINA OFICIAL DE PDFMAKE-WRAPPER
  https://www.npmjs.com/package/pdfmake-wrapper
  */

// FUNCIONES PARA ABRIR PDF'S
abrirFichaTecnica() {
  console.log('Abierto PDF Ficha Técnica');
  const pdfFicha = new PdfMakeWrapper();

  pdfFicha.create().open();

  pdfFicha.info({
    title: 'Ficha Técnica - Documentos',
    author: 'Brandon Quiroz',
    subject: 'FICHA TÉCNICA PRUEBA PARA EL SISTEMA'
  });
}

abrirDocumentosPadron() {
  console.log('Abierto PDF Documentos Padrón');
  const pdfPadron = new PdfMakeWrapper();

  pdfPadron.add('Hola');
  pdfPadron.create().open();
  pdfPadron.info({
    title: 'Documentos Padron - Documentos',
    author: 'Brandon Quiroz',
    subject: 'DOCUMENTOS PADRÓN PRUEBA PARA EL SISTEMA'
  });
}

abrirAnexosOficiales() {
  console.log('Abierto PDF Anexos Oficiales');
  const pdfAnexos = new PdfMakeWrapper();

  pdfAnexos.add('Hola');
  pdfAnexos.create().open();
  pdfAnexos.info({
    title: 'Anexos Oficiales - Documentos',
    author: 'Brandon Quiroz',
    subject: 'ANEXOS OFICIALES PRUEBA PARA EL SISTEMA'
  });
}

abrirContratosAnexos() {
  console.log('Abierto PDF Contratos y Anexos');
  const pdfContratos = new PdfMakeWrapper();

  pdfContratos.add('Hola');
  pdfContratos.create().open();
  pdfContratos.info({
    title: 'Contratos y Anexos - Documentos',
    author: 'Brandon Quiroz',
    subject: 'CONTRATOS ANEXOS PRUEBA PARA EL SISTEMA'
  });
}



  /*
  Girar pantalla dentro del PDF
  pdfFicha.pageOrientation('landscape'); // 'portrait'

  Colocar marca de agua al documento
  pdfFicha.watermark( new Txt('LPA Technologies').color('gray').end );

  Escribir dentro del documento
  pdfFicha.rawContent('Simple content');

  Agregar QR (puede agregarse para solamente escribir texto ó para agregar urls para paginas web)
  pdfFicha.add(new QR('texto de ejemplo').end);
  pdfFicha.add(new QR('http://www.complise.mx/').end);

  */




// var dd = {
  //   content: [
  //     {
  //       image: 'https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/opening.jpg'
  //     }
  //   ]
  // }

  // 'https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/opening.jpg'

  // pdfFicha.background('https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/opening.jpg');

  // pdfFicha.rawContent(new Txt('Municipio de Nuevo Laredo, \n Tamaulipas Avenida Guerrero No. 1500 \n Ojo Caliente, 88040 \n Nuevo Laredo, Tamaulipas, México \n RFC:___-___-___ \n Tel.').alignment('center').end);






}
