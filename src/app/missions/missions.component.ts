import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'csy-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
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
