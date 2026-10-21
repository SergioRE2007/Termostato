import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-control-temperatura',
  imports: [],
  templateUrl: './control-temperatura.component.html',
  styleUrl: './control-temperatura.component.css'
})
export class ControlTemperaturaComponent {
  temperatura = input<number>(0);
  umbral = input<number>(25);
  cambioTemperatura = output<number>();
  cambioUmbral = output<number>();

  subir() {
    this.cambioTemperatura.emit(this.temperatura() + 1);
  }

  bajar() {
    this.cambioTemperatura.emit(this.temperatura() - 1);
  }

  cambiarUmbral(evento: Event) {
    // (input) se dispara cada vez que se escribe una tecla, (change) solo cuando el campo pierde el foco o se pulsa Enter.
    // evento.target es de tipo EventTarget y no tiene la propiedad value, con "as HTMLInputElement" le decimos a TypeScript que es un input para poder leer campo.value.
    // Si no se introduce un numero, Number() devuelve NaN y la alarma nunca salta porque cualquier comparacion con NaN es false.
    // Deberiamos comprobar con isNaN() y no emitir el valor si no es un numero (o usar type="number" en el input).
    const campo = evento.target as HTMLInputElement;
    const nuevoUmbral = Number(campo.value);
    if (isNaN(nuevoUmbral)) {
      return;
    }
    this.cambioUmbral.emit(nuevoUmbral);
  }
}
