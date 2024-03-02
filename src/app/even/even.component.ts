import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `
    <div *ngIf="!isOdd">
      <p class="even-style">Even Number: {{ number }}</p>
    </div>
  `,
  styles: ['.even-style { color: blue; }'],
})
export class EvenComponent {
  @Input() number: number;
  get isOdd(): boolean {
    return this.number % 2 !== 0;
  }
}