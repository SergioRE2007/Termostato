import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-temperatura',
  imports: [],
  templateUrl: './display-temperatura.component.html',
  styleUrl: './display-temperatura.component.css'
})
export class DisplayTemperaturaComponent implements OnChanges {
  temperatura = input<number>(0);
  umbral = input<number>(25);
  alarma = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperatura']) {
      const cambio = changes['temperatura'];
      console.log(cambio.previousValue);
      console.log(cambio.currentValue);
      console.log(cambio.firstChange);

      const nuevaTemperatura = cambio.currentValue;
      this.alarma = nuevaTemperatura > this.umbral();
    }

    if (changes['umbral']) {
      const nuevoUmbral = changes['umbral'].currentValue;
      this.alarma = this.temperatura() > nuevoUmbral;
    }
  }
}
