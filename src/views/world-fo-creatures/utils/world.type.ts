import { Wall } from '../models/wall.model';
import { BouncingCritter } from '../models/bouncing-critter.model';
import { WallFollower } from '../models/wall-follower.model';

export enum LegendEnum {
  WALL = '#',
  // BOUNCING_CRITTER = 'o',
  PLANT = '*',
  PLANT_EATER = 'o',
  // WALL_FOLLOWER = '~',
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

export enum ActionTypeEnum {
  MOVE = 'move',
  EAT = 'eat',
  REPRODUCE = 'reproduce',
  GROW = 'grow',
}

export interface IAction {
  type: string;
  direction: DirectionsEnum;
}

// export type ICreatures = typeof Wall | typeof BouncingCritter | WallFollower | null;
export type ICreatures = any;
