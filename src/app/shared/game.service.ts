import { Injectable } from '@angular/core';

import { BaseMission } from './';
import { FindJaneMission } from './missions';

@Injectable()
export class GameService {
  running: boolean = false; 
  messages: string[] = [];
  missions: Array<BaseMission> = [];

  constructor() {
    this.missions.push(new FindJaneMission());
  }

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
