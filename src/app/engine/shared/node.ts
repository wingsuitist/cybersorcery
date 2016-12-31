import {
  Command,
  Filesystem,
  Shell,
  GameService
} from './';

export class Node {
  filesystems: Array<Filesystem>;
  shell: Array<Shell>;
  gameService: GameService;

}
