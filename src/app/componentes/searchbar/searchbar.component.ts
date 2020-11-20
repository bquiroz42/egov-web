import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Contratista } from 'src/app/interfaces/Contratista';
import { Contrato } from '../../interfaces/Contrato';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input('titulo') titulo: string;

      textoBuscar = '';
  contratistas: Contratista[];
  @Input('infoContratista') infoContratista: any; 

  constructor(
    private dataService: DataService, 
    private router: Router
    ) {
  }

  ngOnInit(): void {
    }

    // BUSCAR CONTRATISTAS POR LETRA O NOMBRE
    buscar( event ){
      const texto = event.target.value;
      this.textoBuscar = texto;
      // SI EL PARAMETRO ES VACÍO O NULO, MUESTRA MENSAJE DE ERROR
      if (this.textoBuscar === '' && this.textoBuscar === null){
        return console.info('Sin busquedas, input vacio o nullo');
      }else{
        // MUESTRA RESPUESTA SI LA BUSQUEDA CONCUERDA CON LOS DATOS DE LA DB
      this.infoContratista = this.dataService.getContratista(this.textoBuscar).subscribe((data: any) => {
          if (data.success) {
            this.contratistas = data.body;
            console.log(data.body);
            console.log('Busqueda exitosa: Contratistas');
          }
        });
      }
      }

  verListaDocumentos(){
    // REDIRECCIONAR A LA LISTA DE RESULTADOS (LISTA-DOCUMENTOS)
    this.router.navigate(['lista-documentos']);
  }

  }
