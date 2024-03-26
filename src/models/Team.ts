import { logos } from '../assets/images';

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
  logo: logos.opticLogo,
  color: 'rgb(147, 200, 82)',
};

const teamTwo: Team = {
  name: 'Los Angeles Thieves',
  logo: logos.thievesLogo,
  color: 'rgb(255, 0, 0)',
};

const teamThree: Team = {
  name: 'Toronto Ultra',
  logo: logos.ultraLogo,
  color: 'rgb(173, 101, 255)',
};

const teamFour: Team = {
  name: 'Miami Heretics',
  logo: logos.hereticsLogo,
  color: 'rgb(53, 196, 188)',
};

const teamFive: Team = {
  name: 'Minnesota RØKKR',
  logo: logos.rokkrLogo,
  color: 'rgb(17, 182, 228)',
};

const teamSix: Team = {
  name: 'Los Angeles Guerrillas',
  logo: logos.guerrillasLogo,
  color: 'rgb(96, 38, 158)',
};

const teamSeven: Team = {
  name: 'Carolina Royal Ravens',
  logo: logos.ravensLogo,
  color: 'rgb(0, 132, 194)',
};

const teamEight: Team = {
  name: 'New York Subliners',
  logo: logos.sublinersLogo,
  color: 'rgb(254, 237, 0)',
};

const teamNine: Team = {
  name: 'Seattle Surge',
  logo: logos.surgeLogo,
  color: 'rgb(22, 102, 125)',
};

const teamTen: Team = {
  name: 'Boston Breach',
  logo: logos.breachLogo,
  color: 'rgb(2, 255, 91)',
};

const teamEleven: Team = {
  name: 'Atlanta FaZe',
  logo: logos.fazeLogo,
  color: 'rgb(247, 81, 59)',
};

const teamTwelve: Team = {
  name: 'Las Vegas Legion',
  logo: logos.legionLogo,
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
