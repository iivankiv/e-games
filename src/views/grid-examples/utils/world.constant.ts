import { Vector } from '../models/vector.model';
import { DirectionsEnum, LegendEnum } from './world.type';
import { Wall } from '../models/wall.model';
import { BouncingCritter } from '../models/bouncing-critter.model';

export const plan = [
  '############################',
  '#       #      #     o    ##',
  '#                          #',
  '#          #####           #',
  '##         #   #   ##      #',
  '###           ##    #      #',
  '#            ###    #      #',
  '#   ####                   #',
  '#   ##        o            #',
  '#  o #         o       ### #',
  '#    #                     #',
  '############################',
];

export const directions: Record<string, Vector> = {
  [DirectionsEnum.N]: new Vector(0, -1),
  [DirectionsEnum.NE]: new Vector(1, -1),
  [DirectionsEnum.E]: new Vector(1, 0),
  [DirectionsEnum.SE]: new Vector(1, 1),
  [DirectionsEnum.S]: new Vector(0, 1),
  [DirectionsEnum.SW]: new Vector(-1, 1),
  [DirectionsEnum.W]: new Vector(-1, 0),
  [DirectionsEnum.NW]: new Vector(-1, -1),
};

export const legend = {
  [LegendEnum.WALL]: Wall,
  [LegendEnum.BOUNCING_CRITTER]: BouncingCritter,
  [LegendEnum.SPACE]: {},
};
