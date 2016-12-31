import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../shared/chat';

@Component({
  selector: 'csy-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  @Input()
  chat: Chat;

  constructor() { }

  ngOnInit() {
  }

}
