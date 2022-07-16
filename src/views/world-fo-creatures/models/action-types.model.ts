import { IAction, ICreatures } from '../utils/world.type';
import { IVector } from './vector.model';
import { checkDestination, elementFromChar } from '../utils/world.util';

export class ActionTypesModel {
  grow(critter: ICreatures) {
    critter.energy += 0.5;
    return true;
  }

  move(critter: ICreatures, vector: IVector, action: IAction, grid: any) {
    const dest = checkDestination(action, vector, grid);
    if (dest == null || critter.energy <= 1 || grid.get(dest) != null) return false;
    critter.energy -= 1;
    grid.set(vector, null);
    grid.set(dest, critter);
    return true;
  }

  eat(critter: ICreatures, vector: IVector, action: IAction, grid: any) {
    const dest = checkDestination(action, vector, grid);
    const atDest = dest != null && grid.get(dest);
    if (!atDest || atDest.energy == null) return false;
    critter.energy += atDest.energy;
    grid.set(dest, null);
    return true;
  }

  reproduce(critter: ICreatures, vector: IVector, action: IAction, grid: any, legend: any) {
    const baby = elementFromChar(legend, critter.originChar);
    const dest = checkDestination(action, vector, grid);
    if (dest == null || critter.energy <= 2 * baby.energy || grid.get(dest) != null) return false;
    critter.energy -= 2 * baby.energy;
    grid.set(dest, baby);
    return true;
  }
}
