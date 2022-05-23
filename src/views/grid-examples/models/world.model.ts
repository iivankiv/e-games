import { charFromElement, checkDestination, elementFromChar } from '../utils/world.util';
import { directions } from '../utils/world.constant';
import { Grid } from './grid.model';
import { IAction, ICreatures, LegendEnum } from '../utils/world.type';
import { IVector, Vector } from './vector.model';
import { View } from './view.model';

export class World {
  grid: Grid;
  legend: Record<LegendEnum, ICreatures>;

  constructor(map: string[], legend: Record<LegendEnum, ICreatures>) {
    this.grid = new Grid(map[0].length, map.length);
    this.legend = legend;

    map.forEach((line, y) => {
      for (let x = 0; x < line.length; x++) {
        this.grid.set(new Vector(x, y), elementFromChar(legend, line[x] as LegendEnum));
      }
    });
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

  turn() {
    const acted: any = [];
    this.grid.forEach((critter: any, vector: IVector) => {
      if (critter.act && acted.indexOf(critter) === -1) {
        acted.push(critter);
        this.letAct(critter, vector);
      }
    }, this);
  }

  letAct(critter: any, vector: IVector) {
    const action = critter.act(new View(this, vector));
    if (action && action.type === 'move') {
      const dest = checkDestination(action, vector, this.grid);
      if (dest && this.grid.get(dest) == null) {
        this.grid.set(vector, null);
        this.grid.set(dest, critter);
      }
    }
  }
}
