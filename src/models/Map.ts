import { mapImages } from '../assets/images';

export interface Map {
  name: string;
  image: string;
}

export const mapOne: Map = {
  name: 'Karachi',
  image: mapImages.karachiMap,
};

export const mapTwo: Map = {
  name: 'Highrise',
  image: mapImages.highriseMap,
};

export const mapThree: Map = {
  name: 'Skidrow',
  image: mapImages.skidrowMap,
};

export const mapFour: Map = {
  name: 'Invasion',
  image: mapImages.invasionMap,
};

export const mapFive: Map = {
  name: 'Sub Base',
  image: mapImages.subBaseMap,
};

export const mapSix: Map = {
  name: 'Terminal',
  image: mapImages.terminalMap,
};

export const mapSeven: Map = {
  name: 'Rio',
  image: mapImages.rioMap,
};

export const maps = [mapOne, mapTwo, mapThree, mapFour, mapFive, mapSix, mapSeven];
