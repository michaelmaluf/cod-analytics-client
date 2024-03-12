export interface GameMode {
  name: string;
  color: string;
}

const Hardpoint: GameMode = {
  name: 'Hardpoint',
  color: 'Green',
};

const SearchAndDestroy: GameMode = {
  name: 'Search & Destroy',
  color: 'Red',
};

const Control: GameMode = {
  name: 'Hardpoint',
  color: 'Blue',
};

export const gameModes = [Hardpoint, SearchAndDestroy, Control];
