import { Component } from '@angular/core';

@Component({
  selector: 'csy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameEnded: boolean = false;
  message: string;

  endGame(message) {
    console.log("app: " + message);
    this.gameEnded = true;
    this.message = message;
  }

  restartGame() {
    this.gameEnded = false;
    this.message = undefined;
  }
}
