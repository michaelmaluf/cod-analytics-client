import { Map, mapOne, mapTwo, mapFour, mapFive, mapSeven, mapEight, mapNine } from './Map';

export interface GameMode {
  name: string;
  color: string;
  maps: Map[];
  targetScore: number;
  objectiveKey: string;
}

const Hardpoint: GameMode = {
  name: 'Hardpoint',
  color: 'Green',
  maps: [mapOne, mapFive, mapSeven, mapEight, mapNine],
  targetScore: 250,
  objectiveKey: 'Hill Time',
};

const SearchAndDestroy: GameMode = {
  name: 'Search & Destroy',
  color: 'Red',
  maps: [mapOne, mapTwo, mapFour, mapSeven, mapEight],
  targetScore: 6,
  objectiveKey: 'First Bloods',
};

const Control: GameMode = {
  name: 'Control',
  color: 'Blue',
  maps: [mapOne, mapTwo, mapFour],
  targetScore: 3,
  objectiveKey: 'Captures',
};

export const gameModes = [Hardpoint, SearchAndDestroy, Control];
