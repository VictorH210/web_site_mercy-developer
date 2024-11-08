import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  formularioForm;
  constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre: '',
      apellido: ''
    });
  }

}
