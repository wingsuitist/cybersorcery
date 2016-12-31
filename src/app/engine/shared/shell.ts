import {
  Command,
  Node,
  GameService
} from '.';

export class Shell {
  commands: Array<Command>;
  node: Node;
  gameService: GameService;
}
