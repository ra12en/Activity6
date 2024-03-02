import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `
    <div *ngIf="isOdd">
      <p class="odd-style">Odd Number: {{ number }}</p>
    </div>
  `,
  styles: ['.odd-style { color: red; }'],
})
export class OddComponent {
  @Input() number: number;
  get isOdd(): boolean {
    return this.number % 2 !== 0;
  }
}