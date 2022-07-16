import { IVector, Vector } from './vector.model';

export interface IGrid {
  width: number;
  height: number;
  space: string[];
}

export class Grid {
  public width: number;
  public height: number;
  public space: number[];

  constructor(width: number, height: number) {
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
  }

  isInside({ x, y }: IVector) {
    const insideWidth = x >= 0 && x < this.width;
    const insideHeight = y >= 0 && y < this.height;
    return insideWidth && insideHeight;
  }

  get({ x, y }: IVector) {
    return this.space[x + this.width * y];
  }

  set({ x, y }: IVector, value: any) {
    this.space[x + this.width * y] = value;
  }

  forEach(f: any, context: any) {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let value = this.space[x + y * this.width];
        if (value != null) f.call(context, value, new Vector(x, y));
      }
    }
  }
}

// var grid = new Grid(5, 5);
// console.log(grid.get(new Vector(1, 1)));
// -> undefined

// grid.set(new Vector(1, 1), "X");
// console.log(grid.get(new Vector(1, 1)));
// → X
