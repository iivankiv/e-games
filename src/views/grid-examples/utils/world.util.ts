import { ICreatures, LegendEnum } from './world.type';

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
