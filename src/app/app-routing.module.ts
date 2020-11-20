import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { LoginComponent } from './pages/login/login.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { ObrasComponent } from './componentes/obras/obras.component';
import { AdquisicionesComponent } from './componentes/adquisiciones/adquisiciones.component';
import { PatrimoniosComponent } from './componentes/patrimonios/patrimonios.component';
import { ListaDocumentosComponent } from './pages/lista-documentos/lista-documentos.component';
import { TablasComponent } from './pages/tablas/tablas.component';


const routes: Routes = [
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'acerca-de', component: AcercaDeComponent},
  {path: 'sugerencias', component: SugerenciasComponent},
  {path: 'terminos', component: TerminosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'filtros', component: FiltrosComponent},
  {path: 'obras', component: ObrasComponent},
  {path: 'adquisiciones', component: AdquisicionesComponent},
  {path: 'patrimonios', component: PatrimoniosComponent},
  {path: 'tablas', component: TablasComponent},
  {path: 'documentos', component: DocumentosComponent},
  {path: 'lista-documentos', component: ListaDocumentosComponent},
  {path: 'lista-documentos/:id', component: ListaDocumentosComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
