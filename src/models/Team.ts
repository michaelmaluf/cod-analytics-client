import { logos } from '../assets/images';

export interface Team {
  name: string;
  logo: string;
}

const teamOne: Team = {
  name: 'OpTic Texas',
  logo: logos.opticLogo,
};

const teamTwo: Team = {
  name: 'Los Angeles Thieves',
  logo: logos.thievesLogo,
};

const teamThree: Team = {
  name: 'Toronto Ultra',
  logo: logos.ultraLogo,
};

const teamFour: Team = {
  name: 'Miami Heretics',
  logo: logos.hereticsLogo,
};

const teamFive: Team = {
  name: 'Minnesota RØKKR',
  logo: logos.rokkrLogo,
};

const teamSix: Team = {
  name: 'Los Angeles Guerrillas',
  logo: logos.guerrillasLogo,
};

const teamSeven: Team = {
  name: 'Carolina Royal Ravens',
  logo: logos.ravensLogo,
};

const teamEight: Team = {
  name: 'New York Subliners',
  logo: logos.sublinersLogo,
};

const teamNine: Team = {
  name: 'Seattle Surge',
  logo: logos.surgeLogo,
};

const teamTen: Team = {
  name: 'Boston Breach',
  logo: logos.breachLogo,
};

const teamEleven: Team = {
  name: 'Atlanta FaZe',
  logo: logos.fazeLogo,
};

const teamTwelve: Team = {
  name: 'Las Vegas Legion',
  logo: logos.legionLogo,
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
