import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameService } from './shared/game.service';
import { TerminalComponent } from './terminal/terminal.component';
import { ChatComponent } from './chat/chat.component';
import { ChatWindowComponent } from './chat/chat-window.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GameService
  ],
  exports: [
    TerminalComponent,
    ChatComponent
  ],
  declarations: [ TerminalComponent, ChatComponent, ChatWindowComponent ]
})
export class EngineModule { }