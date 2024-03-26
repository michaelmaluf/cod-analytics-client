import { Map, GameMode, gameModes } from '.';

export interface MapGameModePair {
  map: Map;
  gameMode: GameMode;
}

const defaultOne: MapGameModePair = {
  map: gameModes[0].maps[0],
  gameMode: gameModes[0],
};

const defaultTwo: MapGameModePair = {
  map: gameModes[1].maps[4],
  gameMode: gameModes[1],
};

const defaultThree: MapGameModePair = {
  map: gameModes[2].maps[2],
  gameMode: gameModes[2],
};

const defaultFour: MapGameModePair = {
  map: gameModes[0].maps[2],
  gameMode: gameModes[0],
};

const defaultFive: MapGameModePair = {
  map: gameModes[1].maps[1],
  gameMode: gameModes[1],
};

export const defaultMapSet: MapGameModePair[] = [
  defaultOne,
  defaultTwo,
  defaultThree,
  defaultFour,
  defaultFive,
];
