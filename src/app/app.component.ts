import { Component } from '@angular/core';

import { GameService } from './shared';

@Component({
  selector: 'csy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private game: GameService
  ){}

  startGame() {
    this.game.start();
  }
}
