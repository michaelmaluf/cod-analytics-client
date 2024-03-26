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

  const { data, isLoading } = useQuery({
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
    <Container className="container-base mx-lg-2 px-lg-4 mx-xl-5 py-2 py-xl-4">
      <Row className="workflow-layout mx-xxl-3">
        <Col xs={12} md={4} lg={3} className="pe-lg-2 pe-xl-3">
          <TeamSelector
            onTeamSelection={handleTeamOneSelection}
            teamSelected={teamOneSelected}
            opponentSelected={teamTwoSelected}
            teamOptions={teams}
          />
        </Col>
        {/* Middle Container - Takes up 50% of the width */}
        <Col xs={12} md={4} lg={6} className="px-md-2 px-md-5 d-flex flex-column">
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
          <Button className="custom-button" onClick={generatePrediction} disabled={isLoading}>
            Generate Prediction
          </Button>
        </Col>
        <Col xs={12} md={4} lg={3} className="ps-lg-2 ps-xl-3">
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
