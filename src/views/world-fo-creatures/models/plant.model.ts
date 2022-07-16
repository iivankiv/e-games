import { Element } from './element.model';
import { ActionTypeEnum, LegendEnum } from '../utils/world.type';

export class Plant extends Element {
  public energy = 3 + Math.random() * 4;

  constructor() {
    super();
  }

  act(view: any) {
    if (this.energy > 15) {
      const space = view.find(LegendEnum.SPACE);
      if (space) return { type: ActionTypeEnum.REPRODUCE, direction: space };
    }

    if (this.energy < 20) return { type: ActionTypeEnum.GROW };
  }
}
