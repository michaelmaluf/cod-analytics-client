import ultraLogo from './team-logos/Ultra-logo.png';
import opticLogo from './team-logos/OpTic-logo.png';
import fazeLogo from './team-logos/FaZe-logo.png';
import sublinersLogo from './team-logos/Subliners-logo.png';
import surgeLogo from './team-logos/Surge-logo.png';
import thievesLogo from './team-logos/Thieves-logo.png';
import guerrillasLogo from './team-logos/Guerrillas-logo.png';
import rokkrLogo from './team-logos/RØKKR-logo.png';
import ravensLogo from './team-logos/Ravens-logo.webp';
import hereticsLogo from './team-logos/Heretics-logo.webp';
import breachLogo from './team-logos/Breach-logo.png';
import legionLogo from './team-logos/Legion-logo.png';

export const logos = {
  ultraLogo,
  opticLogo,
  fazeLogo,
  sublinersLogo,
  surgeLogo,
  thievesLogo,
  guerrillasLogo,
  rokkrLogo,
  ravensLogo,
  hereticsLogo,
  breachLogo,
  legionLogo,
};

import invasionMap from './maps/Invasion-map.webp';
import karachiMap from './maps/Karachi-map.webp';
import subBaseMap from './maps/Subbase-map.webp';
import skidrowMap from './maps/Skidrow-map.webp';
import highriseMap from './maps/Highrise-map.webp';
import rioMap from './maps/Rio-map.webp';
import terminalMap from './maps/Terminal-map.webp';

export const mapImages = {
  invasionMap,
  karachiMap,
  subBaseMap,
  highriseMap,
  skidrowMap,
  rioMap,
  terminalMap,
};

import hardpointGameMode from './game-modes/Hardpoint-gamemode.png';
import searchAndDestroyGameMode from './game-modes/Search-and-Destroy-gamemode.png';
import controlGameMode from './game-modes/Control-gamemode.png';

export const gameModeImages = {
  hardpointGameMode,
  searchAndDestroyGameMode,
  controlGameMode,
};

// import.meta.glob - Vite feature that simplifies dynamic import of moduels & assets

const players = import.meta.glob('./players/*.{png,jpg,jpeg,PNG,JPEG,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Transforming the object into a more usable format
export const playerImages = Object.entries(players).reduce(
  (acc: Record<string, string>, [path, url]) => {
    // Extract a meaningful key from the file path
    const name = path.split('/').pop()?.split('.')[0] ?? '';
    acc[name] = url as string;
    return acc;
  },
  {},
);
