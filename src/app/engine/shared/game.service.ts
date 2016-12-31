import { Injectable } from '@angular/core';
/*import { 
  Chat,
  Command,
  Filesystem,
  Node,
  Npc,
  Shell
} from './';*/

@Injectable()
export class GameService {
  /*chats: Array<Chat>;
  nodes: Array<Node>;
  npcs: Array<Npc>;

  addNpc(npc: Npc) {
    this.npcs.push(npc);
  }*/
  
  constructor() {
    console.log('game service');
  }

}