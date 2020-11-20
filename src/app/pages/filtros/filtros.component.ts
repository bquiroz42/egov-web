import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
// import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit, OnDestroy {

  valorMinimo: number = 0;
  valorMaximo: number = 1000000;

  @Output() cambiarValor: EventEmitter<number>;

  constructor(private router: Router ) {
    this.cambiarValor = new EventEmitter();
  }

  ngOnInit(): void {
    this.activarModal();
  }

  ngOnDestroy(): void {
      this.cerrarModal();
      
  }

  

  activarModal() {
    Swal.fire({
      title: 'Filtros',
      text: 'Filtrar busquedas para encontrar distintos resultados dentro del sistema',
      imageUrl: 'https://cdn2.iconfinder.com/data/icons/setting-6/24/setting-1-512.png',
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: 'Configuraciones',
    });
  }

  cerrarModal() {
  Swal.close();
  }

  // SLIDER'S
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  activarFiltros(){
  console.log('Filtros activados');
  Swal.fire('Filtros activados', 'Configuración exitosa del sistema', 'success');
  this.router.navigate(['/inicio']);
  }

  salirSinGuardar(){
    Swal.fire('Configuracion cancelada', 'El usuario canceló la configuración de los filtros del sistema', 'info');
  }

}

