import { useState, useMemo } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { GameMode, gameModes, Team, teams, Map, PredictionRequestGenerator } from '../models';
import { TeamSelector } from './TeamSelector';
import { GameModeSelector } from './GameModeSelector';
import { MapSelector } from './MapSelector';
import { PredictionService } from '../services';
import '../assets/styles/utility-components.css';
import '../assets/styles/workflow-manager.css';

export const PredictionWorkFlowManager = () => {
  const [teamOneSelected, setTeamOneSelected] = useState<Team>(teams[0]);
  const [teamTwoSelected, setTeamTwoSelected] = useState<Team>(teams[1]);
  const [gameModeSelected, setGameModeSelected] = useState<GameMode>(gameModes[0]);
  const [mapSelected, setMapSelected] = useState<Map>(gameModeSelected.maps[0]);
  const predictionRequest = useMemo(
    () => ({
      teamOne: teamOneSelected,
      teamTwo: teamTwoSelected,
      gameMode: gameModeSelected,
      map: mapSelected,
    }),
    [teamOneSelected, teamTwoSelected, gameModeSelected, mapSelected],
  );
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ['fetchPrediction', predictionRequest],
    queryFn: () => PredictionService.fetchPrediction(predictionRequest),
    staleTime: 6 * 60 * 60 * 1000, // 6 hour stale time
  });

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

  const generatePrediction = () => {
    const newPredictionRequest = new PredictionRequestGenerator(
      teamOneSelected,
      teamTwoSelected,
      gameModeSelected,
      mapSelected,
    );
    navigate('/predictions', {
      state: {
        data: data,
        predictionRequest: newPredictionRequest,
      },
    });
  };

  return (
    <Container className="container-base" fluid>
      <Row className="workflow-layout">
        <Col xs={12} md={3} className="pe-5">
          <TeamSelector
            onTeamSelection={handleTeamOneSelection}
            teamSelected={teamOneSelected}
            opponentSelected={teamTwoSelected}
            teamOptions={teams}
          />
        </Col>
        {/* Middle Container - Takes up 50% of the width */}
        <Col xs={12} md={6} className="ps-5 pe-5 h-100 d-flex flex-column">
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
          <Button className="custom-button" onClick={generatePrediction}>
            Generate Prediction
          </Button>
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

export default PredictionWorkFlowManager;
