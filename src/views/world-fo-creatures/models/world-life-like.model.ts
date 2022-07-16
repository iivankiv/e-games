import { charFromElement } from '../utils/world.util';
import { ICreatures, LegendEnum } from '../utils/world.type';
import { IVector, Vector } from './vector.model';
import { View } from './view.model';
import { World } from './world.model';

export class WorldLifeLike extends World {
  private actionTypes = Object.create(null);

  constructor(map: string[], legend: Record<LegendEnum, ICreatures>) {
    super(map, legend);
  }

  toString() {
    let output = '';
    for (let y = 0; y < this.grid.height; y++) {
      for (let x = 0; x < this.grid.width; x++) {
        const element = this.grid.get(new Vector(x, y));
        output += charFromElement(element);
      }
      output += '\n';
    }
    return output;
  }

  letAct(critter: any, vector: IVector) {
    const action = critter.act(new View(this, vector));
    const handled =
      action && action.type in this.actionTypes && this.actionTypes[action.type].call(this, critter, vector, action);

    if (!handled) {
      critter.energy -= 0.2;
      if (critter.energy <= 0) this.grid.set(vector, null);
    }
  }
}
