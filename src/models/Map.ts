export interface Map {
  name: string;
  image: string;
}

export const mapOne: Map = {
  name: 'Karachi',
  image: `${import.meta.env.VITE_IMAGE_URL}/maps/Karachi-map.webp`,
};

export const mapTwo: Map = {
  name: 'Highrise',
  image: `${import.meta.env.VITE_IMAGE_URL}/maps/Highrise-map.webp`,
};

export const mapThree: Map = {
  name: 'Skidrow',
  image: `${import.meta.env.VITE_IMAGE_URL}/maps/Skidrow-map.webp`,
};

export const mapFour: Map = {
  name: 'Invasion',
  image: `${import.meta.env.VITE_IMAGE_URL}/maps/Invasion-map.webp`,
};

export const mapFive: Map = {
  name: 'Sub Base',
  image: `${import.meta.env.VITE_IMAGE_URL}/maps/Subbase-map.webp`,
};

export const mapSix: Map = {
  name: 'Terminal',
  image: `${import.meta.env.VITE_IMAGE_URL}/maps/Terminal-map.webp`,
};

export const mapSeven: Map = {
  name: 'Rio',
  image: `${import.meta.env.VITE_IMAGE_URL}/maps/Rio-map.webp`,
};

export const maps = [mapOne, mapTwo, mapThree, mapFour, mapFive, mapSix, mapSeven];
