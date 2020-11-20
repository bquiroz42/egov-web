import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Configurations Red
import { Red } from './config/red';

// RouterModule
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Pages
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { LoginComponent } from './pages/login/login.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ObrasComponent } from './componentes/obras/obras.component';
import { AdquisicionesComponent } from './componentes/adquisiciones/adquisiciones.component';
import { PatrimoniosComponent } from './componentes/patrimonios/patrimonios.component';
import { ListaDocumentosComponent } from './pages/lista-documentos/lista-documentos.component';

// Components
import { SearchbarComponent } from './componentes/searchbar/searchbar.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { TabsFooterComponent } from './componentes/tabs-footer/tabs-footer.component';
import { TitleOptionsComponent } from './componentes/title-options/title-options.component';
import { ButtonFooterComponent } from './componentes/button-footer/button-footer.component';

// PDFMAKER WRAPPER
import { PdfMakeWrapper } from 'pdfmake-wrapper';
// fonts provided for pdfmake
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

// Angular Material
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TablasComponent } from './pages/tablas/tablas.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchbarComponent,
    AcercaDeComponent,
    ConfiguracionComponent,
    DocumentosComponent,
    LoginComponent,
    SugerenciasComponent,
    TerminosComponent,
    FiltrosComponent,
    InicioComponent,
    ObrasComponent,
    AdquisicionesComponent,
    PatrimoniosComponent,
    TabsFooterComponent,
    ListaDocumentosComponent,
    TitleOptionsComponent,
    ButtonFooterComponent,
    TablasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatCheckboxModule
  ],
  providers: [Red],
  bootstrap: [AppComponent]
})
export class AppModule { }
