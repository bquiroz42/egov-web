import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit, OnDestroy {

  opciones: string[] = ['Monto' , 'Monto Maximo', 'Resultado por página', 'Rango de Intervalos'];
  numeros = ['$0' , '$1,000,000' , '20', '$1000'];

  constructor(
    private router: Router
    ) {
  }

  ngOnInit(): void {
  this.abrirModal();
  }

  ngOnDestroy(): void {
  this.cerrarModal();
  }

  abrirModal(){
    // Swal.fire('Configuraciones', 'Configura el sistema a tu gusto para buscar distintas cosas', 'info');

    Swal.fire({
      title: 'Configuraciones',
      text: 'Configura el sistema para efectuar distintas busquedas',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/10/24/11/53/tools-2884303_960_720.png',
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Configuraciones',
    });

  }

  cerrarModal(){
    Swal.close();
  }


  /* ACEPTAR CAMBIOS Y CONFIGURAR SISTEMA
     CON LAS CONFIGURACIONES DEL USUARIO   */

  configurarSistema(){
    console.log('Sistema configurado');

    this.router.navigate(['/inicio']);
  }

}
