import { DirectionsEnum, IAction, ICreatures, LegendEnum } from './world.type';
import { directions } from './world.constant';
import { IVector } from '../models/vector.model';

export function randomElement(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function elementFromChar(legend: Record<LegendEnum, ICreatures>, ch: LegendEnum) {
  if (ch === LegendEnum.SPACE) return null;

  const elementClass = legend[ch];
  const element = new elementClass();
  element.originChar = ch;

  return element;
}

export function charFromElement(element: any) {
  return element == null ? ' ' : element.originChar;
}

export function dirPlus(dir: DirectionsEnum, n: number): DirectionsEnum {
  const directionNames = Object.keys(directions);
  const index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8] as DirectionsEnum;
}

export function checkDestination(action: IAction, vector: IVector, grid: any) {
  if (directions.hasOwnProperty(action.direction)) {
    const dest = vector.plus(directions[action.direction]);
    if (grid.isInside(dest)) return dest;
  }
}
