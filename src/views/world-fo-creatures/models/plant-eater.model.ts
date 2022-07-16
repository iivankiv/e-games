import { Element } from './element.model';
import { ActionTypeEnum, LegendEnum } from '../utils/world.type';

export class PlantEater extends Element {
  public energy = 20;

  constructor() {
    super();
  }

  act(view: any) {
    const space = view.find(' ');
    if (this.energy > 60 && space) return { type: ActionTypeEnum.REPRODUCE, direction: space };
    const plant = view.find(LegendEnum.PLANT);
    if (plant) return { type: ActionTypeEnum.EAT, direction: plant };
    if (space) return { type: ActionTypeEnum.MOVE, direction: space };
  }
}
