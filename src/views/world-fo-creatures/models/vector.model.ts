export interface IVector {
  x: number;
  y: number;
  plus: (vector: IVector) => Vector;
}

export class Vector {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  plus(other: IVector) {
    return new Vector(this.x + other.x, this.y + other.y);
  }
}
