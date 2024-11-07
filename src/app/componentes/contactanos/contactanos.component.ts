import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  responseMessage: string | null = null;
  onSubmit(form: any): void {
    const nombre = form.value.nombre;
    const apellido = form.value.apellido;
    const mensaje = form.value.mensaje;

    console.log(`Nombre: ${nombre} ${apellido}`);
    console.log(`Mensaje: ${mensaje}`);
    this.responseMessage = `Hola ${nombre} ${apellido}, su mensaje ha sido enviado correctamente.`;
    form.reset();
  }
}
