import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-footer',
  templateUrl: './tabs-footer.component.html',
  styleUrls: ['./tabs-footer.component.css']
})
export class TabsFooterComponent implements OnInit {

   items = [
     {nombre: 'Buscador',  url: '/inicio', icono: 'fa fa-search'},
     {nombre: 'Obras', url: '/obras', icono: 'fa fa-search'},
     {nombre: 'Adquisiciones', url: '/adquisiciones', icono: 'fa fa-search'},
     {nombre: 'Patrimonios', url: '/patrimonios', icono: 'fa fa-search'},
            ];


  constructor() { }

  ngOnInit(): void {
  }

}
