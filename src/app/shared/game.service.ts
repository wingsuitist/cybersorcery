import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  running: boolean = false; 
  messages: string[] = [];

  constructor() { }

  start() {
    this.addMessage('Game Started!');
    this.running = true;
  }

  addMessage(message: string): void {
    this.messages.push(message);
    let messageIndex = Math.max.apply(this, this.messages);
    setTimeout(() => {
      this.messages.splice(messageIndex, 1);
    }, 5000);
  }
}
