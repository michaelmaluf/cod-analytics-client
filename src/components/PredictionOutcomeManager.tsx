import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { DataVisualizer } from './DataVisualizer';
import { PredictionScoreboard } from './PredictionScoreboard';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/outcome-manager.css';

export const PredictionOutcomeManager = () => {
  const location = useLocation();
  const { data, predictionRequest } = location.state || {};
  const navigate = useNavigate();
  // # margin on sides less and margin on top and bottom more when you get back, then done
  return (
    <Container className="container-base px-2 py-4">
      {predictionRequest && data && (
        <Row className="justify-content-md-center">
          <Col xs={12} md={6} className="px-md-5 d-flex flex-column justify-content-start">
            <PredictionScoreboard
              team={predictionRequest.teamOne}
              teamScore={data.team_one_prediction}
              playerPredictions={data.team_one_player_predictions}
              objectiveKey={predictionRequest.gameMode.objectiveKey}
            />
            <PredictionScoreboard
              team={predictionRequest.teamTwo}
              teamScore={data.team_two_prediction}
              playerPredictions={data.team_two_player_predictions}
              objectiveKey={predictionRequest.gameMode.objectiveKey}
            />
            <Button className="custom-button" onClick={() => navigate(-1)}>
              Make New Prediction
            </Button>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-around gap-3">
            <DataVisualizer
              teamOne={predictionRequest.teamOne}
              teamTwo={predictionRequest.teamTwo}
              teamOneAverage={data.team_one_average_score}
              teamTwoAverage={data.team_two_average_score}
              leagueAverage={data.league_average_score}
              targetScore={predictionRequest.gameMode.targetScore}
              dataKey={'Average Team Score'}
            />
            <DataVisualizer
              teamOne={predictionRequest.teamOne}
              teamTwo={predictionRequest.teamTwo}
              teamOneAverage={data.team_one_average_score_against}
              teamTwoAverage={data.team_two_average_score_against}
              leagueAverage={data.league_average_score}
              targetScore={predictionRequest.gameMode.targetScore}
              dataKey={'Average Team Score Against'}
            />
            <DataVisualizer
              teamOne={predictionRequest.teamOne}
              teamTwo={predictionRequest.teamTwo}
              teamOneAverage={data.team_one_average_kd}
              teamTwoAverage={data.team_two_average_kd}
              leagueAverage={data.league_average_kd}
              targetScore={1.2}
              dataKey={'Team K/D'}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default PredictionOutcomeManager;
