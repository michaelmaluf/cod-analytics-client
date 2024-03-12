import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import { GameMode, gameModes, Team, teams, Map, maps } from '../models';
import { TeamSelector } from './TeamSelector';
import { GameModeSelector } from './GameModeSelector';
import { MapSelector } from './MapSelector';
import { PredictionOutcomeHandler } from './PredictionOutcomeHandler';

const PredictionWorkFlowManager = () => {
  const [teamOneSelected, setTeamOneSelected] = useState<Team>(teams[0]);
  const [teamTwoSelected, setTeamTwoSelected] = useState<Team>(teams[1]);
  const [gameModeSelected, setGameModeSelected] = useState<GameMode>(gameModes[0]);
  const [mapSelected, setMapSelected] = useState<Map>(maps[0]);

  const handleTeamOneSelection = (selectedTeam: Team) => {
    if (teamTwoSelected === selectedTeam) {
      return;
    }
    setTeamOneSelected(selectedTeam);
  };

  const handleTeamTwoSelection = (selectedTeam: Team) => {
    if (teamOneSelected === selectedTeam) {
      return;
    }
    setTeamTwoSelected(selectedTeam);
  };

  const handleGameModeSelection = (selectedGameMode: GameMode) => {
    setGameModeSelected(selectedGameMode);
  };

  const handleMapSelection = (selectedMap: Map) => {
    setMapSelected(selectedMap);
  };

  return (
    <Container>
      <TeamSelector onTeamSelection={handleTeamOneSelection} />
      <Container>
        <GameModeSelector onGameModeSelection={handleGameModeSelection} />
        <MapSelector onMapSelection={handleMapSelection} />
        <PredictionOutcomeHandler
          teamOneSelected={teamOneSelected}
          teamTwoSelected={teamTwoSelected}
          gameModeSelected={gameModeSelected}
          mapSelected={mapSelected}
        />
      </Container>
      <TeamSelector onTeamSelection={handleTeamTwoSelection} />
    </Container>
  );
};
