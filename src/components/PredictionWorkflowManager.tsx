import { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { GameMode, gameModes, Team, teams, Map, maps } from '../models';
import { TeamSelector } from './TeamSelector';
import { GameModeSelector } from './GameModeSelector';
import { MapSelector } from './MapSelector';
import { PredictionOutcomeHandler } from './PredictionOutcomeHandler';

// import { PredictionService } from '../services';
// import { PredictionRequestBuilder } from '../models';

// // const x = new PredictionRequestBuilder(teams[0], teams[1], gameModes[0], maps[0]);

// // const y = PredictionService.fetchPrediction('OpTic Texas', 'Atlanta FaZe', 'Control', 'Karachi');

export const PredictionWorkFlowManager = () => {
  const [teamOneSelected, setTeamOneSelected] = useState<Team>(teams[0]);
  const [teamTwoSelected, setTeamTwoSelected] = useState<Team>(teams[1]);
  const [gameModeSelected, setGameModeSelected] = useState<GameMode>(gameModes[0]);
  const [mapSelected, setMapSelected] = useState<Map>(gameModeSelected.maps[0]);

  useEffect(() => {
    setMapSelected(gameModeSelected.maps[0]);
  }, [gameModeSelected]);

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
      <Row>
        <Col xs={12} md={3}>
          <TeamSelector
            onTeamSelection={handleTeamOneSelection}
            teamSelected={teamOneSelected}
            opponentSelected={teamTwoSelected}
            teamOptions={teams}
          />
        </Col>
        {/* Middle Container - Takes up 50% of the width */}
        <Col xs={12} md={6}>
          <GameModeSelector
            onGameModeSelection={handleGameModeSelection}
            gameModeSelected={gameModeSelected}
            gameModeOptions={gameModes}
          />
          <MapSelector
            onMapSelection={handleMapSelection}
            mapSelected={mapSelected}
            mapOptions={gameModeSelected.maps}
          />
          <PredictionOutcomeHandler
            teamOneSelected={teamOneSelected}
            teamTwoSelected={teamTwoSelected}
            gameModeSelected={gameModeSelected}
            mapSelected={mapSelected}
          />
        </Col>
        <Col xs={12} md={3}>
          <TeamSelector
            onTeamSelection={handleTeamTwoSelection}
            teamSelected={teamTwoSelected}
            opponentSelected={teamOneSelected}
            teamOptions={teams}
          />
        </Col>
      </Row>
    </Container>
  );
};
