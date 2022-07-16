import { IVector } from './vector.model';
import { DirectionsEnum, LegendEnum } from '../utils/world.type';
import { directions } from '../utils/world.constant';
import { charFromElement, randomElement } from '../utils/world.util';

export class View {
  public world: any;
  public vector: IVector;

  constructor(world: any, vector: IVector) {
    this.world = world;
    this.vector = vector;
  }

  look(direction: DirectionsEnum) {
    const target = this.vector.plus(directions[direction]);
    return this.world.grid.isInside(target) ? charFromElement(this.world.grid.get(target)) : '#';
  }

  findAll(ch: LegendEnum) {
    let found = [];

    for (let dir in directions) if (this.look(dir as DirectionsEnum) === ch) found.push(dir);

    return found;
  }

  find(ch: LegendEnum) {
    const found = this.findAll(ch);
    return found.length ? randomElement(found) : null;
  }
}
