import { Wall } from '../models/wall.model';
import { BouncingCritter } from '../models/bouncing-critter.model';

export enum LegendEnum {
  WALL = '#',
  BOUNCING_CRITTER = 'o',
  SPACE = ' ',
}

export enum DirectionsEnum {
  N = 'n',
  NE = 'ne',
  E = 'e',
  SE = 'se',
  S = 's',
  SW = 'sw',
  W = 'w',
  NW = 'nw',
}

export interface IAction {
  type: string;
  direction: DirectionsEnum;
}

// export type ICreatures = typeof Wall | typeof BouncingCritter | null;
export type ICreatures = any;
