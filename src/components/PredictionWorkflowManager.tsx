import { useState, useEffect } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';

import { GameMode, gameModes, Team, teams, Map, maps } from '../models';
import { TeamSelector } from './TeamSelector';
import { GameModeSelector } from './GameModeSelector';
import { MapSelector } from './MapSelector';
import { PredictionOutcomeHandler } from './PredictionOutcomeHandler';

export const PredictionWorkFlowManager = () => {
  const [teamOneSelected, setTeamOneSelected] = useState<Team>(teams[0]);
  const [teamTwoSelected, setTeamTwoSelected] = useState<Team>(teams[1]);
  const [gameModeSelected, setGameModeSelected] = useState<GameMode>(gameModes[0]);
  const [mapSelected, setMapSelected] = useState<Map>(gameModeSelected.maps[0]);

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
    if (!selectedGameMode.maps.some((map) => map.name === mapSelected.name)) {
      setMapSelected(selectedGameMode.maps[0]);
    }
  };

  const handleMapSelection = (selectedMap: Map) => {
    setMapSelected(selectedMap);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} className="pe-5">
          <TeamSelector
            onTeamSelection={handleTeamOneSelection}
            teamSelected={teamOneSelected}
            opponentSelected={teamTwoSelected}
            teamOptions={teams}
          />
        </Col>
        {/* Middle Container - Takes up 50% of the width */}
        <Col xs={12} md={6} className="">
          <Stack gap={3}>
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
          </Stack>
        </Col>
        <Col xs={12} md={3} className="ps-5">
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
