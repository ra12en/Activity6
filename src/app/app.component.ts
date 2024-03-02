import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-game-control (gameEvent)="onGameEvent($event)"></app-game-control>

    <div>
      <div *ngFor="let oddNumber of oddNumbers">
        <app-odd [number]="oddNumber"></app-odd>
      </div>
      <div *ngFor="let evenNumber of evenNumbers">
        <app-even [number]="evenNumber"></app-even>
      </div>
    </div>
  `,
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameEvent(number: number) {
    if (number % 2 !== 0) {
      this.oddNumbers.push(number);
    } else {
      this.evenNumbers.push(number);
    }
  }
}