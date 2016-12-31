import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game.service';

@Component({
  selector: 'csy-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
  }

}
