import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit, OnDestroy {

  sugerenciasForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {
      this.sugerenciasForm = this.fb.group({
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      sugerencia: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
  }

  // SE ENVIA EL ASUNTO Y LA SUGERENCIA
  // TAMBIEN SE UTILIZA UN MENSAJE PARA INDICAR QUE TUVO EXITO
  enviarSugerencia(){
    if (this.sugerenciasForm.invalid) { return console.log('Datos incorrectos'); }

    const { asunto, sugerencia } = this.sugerenciasForm.value;

    console.log(asunto, sugerencia);

    this.router.navigate(['/inicio']);
  }

  ngOnDestroy(){
    Swal.close();
  }

}
