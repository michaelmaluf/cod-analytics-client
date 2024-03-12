import { Map, mapOne, mapTwo, mapThree, mapFour, mapFive, mapSix, mapSeven } from './Map';
import { gameModeImages } from '../assets/images';

export interface GameMode {
  name: string;
  color: string;
  maps: Map[];
  image: string;
}

const Hardpoint: GameMode = {
  name: 'Hardpoint',
  color: 'Green',
  maps: [mapOne, mapThree, mapFour, mapFive, mapSeven],
  image: gameModeImages.hardpointGameMode,
};

const SearchAndDestroy: GameMode = {
  name: 'Search & Destroy',
  color: 'Red',
  maps: [mapOne, mapTwo, mapFour, mapSix, mapSeven],
  image: gameModeImages.searchAndDestroyGameMode,
};

const Control: GameMode = {
  name: 'Control',
  color: 'Blue',
  maps: [mapOne, mapTwo, mapFour],
  image: gameModeImages.controlGameMode,
};

export const gameModes = [Hardpoint, SearchAndDestroy, Control];
