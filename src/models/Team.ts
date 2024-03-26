export interface Player {
  name: string;
  hardpointRank: number;
  searchAndDestroyRank: number;
  controlRank: number;
}

export interface Team {
  name: string;
  logo: string;
  color: string;
  players?: Player[];
}

const teamOne: Team = {
  name: 'OpTic Texas',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/OpTic-logo.png`,
  color: 'rgb(147, 200, 82)',
};

const teamTwo: Team = {
  name: 'Los Angeles Thieves',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/Thieves-logo.png`,
  color: 'rgb(255, 0, 0)',
};

const teamThree: Team = {
  name: 'Toronto Ultra',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/Ultra-logo.png`,
  color: 'rgb(173, 101, 255)',
};

const teamFour: Team = {
  name: 'Miami Heretics',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/Heretics-logo.webp`,
  color: 'rgb(53, 196, 188)',
};

const teamFive: Team = {
  name: 'Minnesota RØKKR',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/RØKKR-logo.png`,
  color: 'rgb(17, 182, 228)',
};

const teamSix: Team = {
  name: 'Los Angeles Guerrillas',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/Guerrillas-logo.png`,
  color: 'rgb(96, 38, 158)',
};

const teamSeven: Team = {
  name: 'Carolina Royal Ravens',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/Ravens-logo.webp`,
  color: 'rgb(0, 132, 194)',
};

const teamEight: Team = {
  name: 'New York Subliners',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/Subliners-logo.png`,
  color: 'rgb(254, 237, 0)',
};

const teamNine: Team = {
  name: 'Seattle Surge',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/Surge-logo.png`,
  color: 'rgb(22, 102, 125)',
};

const teamTen: Team = {
  name: 'Boston Breach',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/Breach-logo.png`,
  color: 'rgb(2, 255, 91)',
};

const teamEleven: Team = {
  name: 'Atlanta FaZe',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/FaZe-logo.png`,
  color: 'rgb(247, 81, 59)',
};

const teamTwelve: Team = {
  name: 'Las Vegas Legion',
  logo: `${import.meta.env.VITE_IMAGE_URL}/team-logos/Legion-logo.png`,
  color: 'rgb(238, 118, 35)',
};

export const teams = [
  teamOne,
  teamTwo,
  teamThree,
  teamFour,
  teamFive,
  teamSix,
  teamSeven,
  teamEight,
  teamNine,
  teamTen,
  teamEleven,
  teamTwelve,
];
