import { teams } from '../models';
import { convertToCamelCase } from '../utils';

export const RosterService = {
  async fetchRosters() {
    const rostersURL = import.meta.env.VITE_ROSTER_URL + '/all';

    const rostersResponse = await fetch(rostersURL, {
      method: 'GET',
    });

    if (!rostersResponse.ok) {
      throw new Error('Roster data is unavailable at this time.');
    }

    const rosters = await rostersResponse.json();

    const completeRosters = teams.map((team) => ({
      ...team,
      players: convertToCamelCase(rosters[team.name]),
    }));

    console.log(completeRosters);

    return completeRosters;
  },
};
