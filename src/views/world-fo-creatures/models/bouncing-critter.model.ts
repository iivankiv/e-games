import { randomElement } from '../utils/world.util';
import { directions } from '../utils/world.constant';
import { DirectionsEnum, IAction } from '../utils/world.type';
import { Element } from './element.model';

export class BouncingCritter extends Element {
  public direction: DirectionsEnum;

  constructor() {
    super();
    this.direction = randomElement(Object.keys(directions)) as DirectionsEnum;
  }

  act(view: any): IAction {
    this.direction = view.look(this.direction) !== ' ' ? view.find(' ') || DirectionsEnum.S : this.direction;
    return { type: 'move', direction: this.direction };
  }
}
