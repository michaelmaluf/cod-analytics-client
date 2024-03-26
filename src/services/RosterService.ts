import { teams } from '../models';

export const RosterService = {
  async fetchRosters() {
    const rostersURL = import.meta.env.VITE_ROSTER_URL + '/all';

    const rostersResponse = await fetch(rostersURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!rostersResponse.ok) {
      throw new Error('Roster data is unavailable at this time.');
    }

    const rosters = await rostersResponse.json();

    const completeRosters = teams.map((team) => ({
      ...team,
      players: rosters[team.name],
    }));

    console.log(completeRosters);

    return completeRosters;
  },
};
