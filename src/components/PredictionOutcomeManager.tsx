import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { PredictionService } from '../services';
import { DataVisualizer } from './DataVisualizer';
import { PredictionScoreboard } from './PredictionScoreboard';
import { Button, Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { MatchOverview } from './MatchOverview';
import { PredictionResults } from '../models';
import { PredictionPreview } from './PredictionPreview';
import '../assets/styles/outcome-manager.css';

export const PredictionOutcomeManager = () => {
  const location = useLocation();
  const { data, teamOne, teamTwo, mapSet } = location.state || {};
  const [teamOneMapsWon, teamTwoMapsWon] = PredictionService.calculateWinner(data);
  const navigate = useNavigate();

  const mapPredictions = data.slice(0, teamOneMapsWon + teamTwoMapsWon);

  return (
    <Container className="container-base px-5 py-4" fluid>
      <MatchOverview
        teamOne={teamOne}
        teamTwo={teamTwo}
        teamOneMapsWon={teamOneMapsWon}
        teamTwoMapsWon={teamTwoMapsWon}
      />
      <Tabs defaultActiveKey="map-0" id="map-tabs" className="map-tabs mb-3" fill justify>
        {mapPredictions.map((map: PredictionResults, index: number) => (
          <Tab eventKey={`map-${index}`} title={`Map ${index + 1}`} key={index}>
            <Row className="align-items-center mb-4">
              <Col>
                <PredictionScoreboard
                  team={teamOne}
                  teamScore={map.team_one_prediction}
                  playerPredictions={map.team_one_player_predictions}
                  objectiveKey={mapSet[index].gameMode.objectiveKey}
                />
              </Col>
              <Col>
                <PredictionPreview
                  mapGameModePair={mapSet[index]}
                  teamOne={teamOne}
                  teamTwo={teamTwo}
                  teamOneScore={map.team_one_prediction}
                  teamTwoScore={map.team_two_prediction}
                />
              </Col>
              <Col>
                <PredictionScoreboard
                  team={teamTwo}
                  teamScore={map.team_two_prediction}
                  playerPredictions={map.team_two_player_predictions}
                  objectiveKey={mapSet[index].gameMode.objectiveKey}
                />
              </Col>
            </Row>
            <Row className="pt-5 pb-3">
              <Col>
                <DataVisualizer
                  teamOne={teamOne}
                  teamTwo={teamTwo}
                  teamOneAverage={map.team_one_average_score}
                  teamTwoAverage={map.team_two_average_score}
                  leagueAverage={map.league_average_score}
                  targetScore={mapSet[index].gameMode.targetScore}
                  dataKey={'Average Team Score'}
                />
              </Col>
              <Col>
                <DataVisualizer
                  teamOne={teamOne}
                  teamTwo={teamTwo}
                  teamOneAverage={map.team_one_average_score_against}
                  teamTwoAverage={map.team_two_average_score_against}
                  leagueAverage={map.league_average_score}
                  targetScore={mapSet[index].gameMode.targetScore}
                  dataKey={'Average Team Score Against'}
                />
              </Col>
            </Row>
          </Tab>
        ))}
      </Tabs>
      <Button className="return-button mb-5" onClick={() => navigate(-1)}>
        Make New Prediction
      </Button>
    </Container>
  );
};

export default PredictionOutcomeManager;
