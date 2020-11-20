import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tituloHeader: string = 'valle hermoso';
  mostrarMenu: boolean;
  usuario = {rol: 'Administrador', correo: 'admin@hotmail.com'};

  options = [
    {
      nombre: 'Inicio',
      icono: 'fa fa-home',
      ruta: '/inicio'
    },
    {
      nombre: 'Configuraciones',
      icono: 'fa fa-cog',
      ruta: '/configuracion'
    },
    {
      nombre: 'Acerca de...',
      icono: 'fa fa-lightbulb-o',
      ruta: '/acerca-de'
    },
    {
      nombre: 'Sugerencias',
      icono: 'fa fa-exclamation-circle',
      ruta: '/sugerencias'
    },
    {
      nombre: 'Terminos de Uso',
      icono: 'fa fa-question-circle',
      ruta: '/terminos'
    },
    {
      nombre: 'Cerrar Sesión',
      icono: 'fa fa-sign-out',
      ruta: '/login'
    },
    {
      nombre: 'Tablas',
      icono: 'fa fa-table',
      ruta: '/tablas'
    }
  ];

  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  openMenu(){
    this.mostrarMenu = true;
  }

  closeMenu(){
    this.mostrarMenu = false;
  }

  abrirFiltros(){
    this.router.navigate(['/filtros']);
  }

}
