import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'csy-mission-wind1',
  templateUrl: './mission-wind1.component.html',
  styleUrls: ['./mission-wind1.component.css']
})
export class MissionWind1Component implements OnInit {
 @Output() 
  onEndGame: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  endGame(message) {
    console.log("app: " + message);
    this.onEndGame.emit(message);
  }
}
