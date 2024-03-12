import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { GameMode, Map, Team } from '../models';
import { PredictionService } from '../services';
import { PredictionResults, PredictionRequest, PredictionRequestGenerator } from '../models';
import { PredictionScoreboard } from './PredictionScoreboard';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/prediction-outcome.css';

interface PredictionOutcomeHandlerProps {
  teamOneSelected: Team;
  teamTwoSelected: Team;
  gameModeSelected: GameMode;
  mapSelected: Map;
}

export const PredictionOutcomeHandler: React.FC<PredictionOutcomeHandlerProps> = ({
  teamOneSelected,
  teamTwoSelected,
  gameModeSelected,
  mapSelected,
}) => {
  const [predictionRequest, setPredictionRequest] = useState<PredictionRequest | undefined>();

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['fetchPrediction', predictionRequest],
    queryFn: () => PredictionService.fetchPrediction(predictionRequest),
    enabled: !!predictionRequest,
  });

  const generatePrediction = () => {
    const newPredictionRequest = new PredictionRequestGenerator(
      teamOneSelected,
      teamTwoSelected,
      gameModeSelected,
      mapSelected,
    );
    setPredictionRequest(newPredictionRequest);
  };

  return (
    <Container>
      <Row className="d-flex flex-row justify-content-around">
        <Button className="prediction-button" onClick={generatePrediction}>
          Generate Prediction
        </Button>
      </Row>
      {predictionRequest && data && (
        <>
          <PredictionScoreboard
            team={predictionRequest.teamOne}
            teamScore={data.team_one_prediction}
            playerPredictions={data.team_one_player_predictions}
          />
          <PredictionScoreboard
            team={predictionRequest.teamTwo}
            teamScore={data.team_two_prediction}
            playerPredictions={data.team_two_player_predictions}
          />
        </>
      )}
    </Container>
  );
};
