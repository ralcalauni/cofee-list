import { Component, Input } from '@angular/core';
import { Cafe } from '../cafe.model';

@Component({
  standalone: false,
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  @Input() cafes: Cafe[] = [];

  totalCafeOrigen(): number {
    return this.cafes.filter(cafe => cafe.tipo.toLowerCase() === 'café de origen').length;
  }

  totalCafeBlend(): number {
    return this.cafes.filter(cafe => cafe.tipo.toLowerCase() === 'blend').length;
  }
}