import { Map, mapOne, mapTwo, mapThree, mapFour, mapFive, mapSix, mapSeven } from './Map';

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
  maps: [mapOne, mapThree, mapFour, mapFive, mapSeven],
  targetScore: 250,
  objectiveKey: 'Hill Time',
};

const SearchAndDestroy: GameMode = {
  name: 'Search & Destroy',
  color: 'Red',
  maps: [mapOne, mapTwo, mapFour, mapSix, mapSeven],
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
