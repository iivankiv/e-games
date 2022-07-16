import { Element } from './element.model';
import { DirectionsEnum } from '../utils/world.type';
import { dirPlus } from '../utils/world.util';

export class WallFollower extends Element {
  public dir = DirectionsEnum.S;

  act(view: any) {
    let start = this.dir;
    if (view.look(dirPlus(this.dir, -3)) !== ' ') {
      start = this.dir = dirPlus(this.dir, -2);
    }

    while (view.look(this.dir) != ' ') {
      this.dir = dirPlus(this.dir, 1);
      if (this.dir === start) break;
    }

    return { type: 'move', direction: this.dir };
  }
}
