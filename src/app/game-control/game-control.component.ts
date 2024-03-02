import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `
    <div>
      <button (click)="startGame()">Start Game</button>
      <button (click)="stopGame()">Stop Game</button>
    </div>
  `,
})
export class GameControlComponent {
  @Output() gameEvent = new EventEmitter<number>();
  private intervalRef: any;

  startGame() {
    this.intervalRef = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      this.gameEvent.emit(randomNumber);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalRef);
  }
}