import { Button, Container, Row, Col, Table } from 'react-bootstrap';

import { PlayerPrediction } from '../models/Prediction';
import { Team } from '../models';
import '../assets/styles/prediction-outcome.css';

interface PredictionScoreboardProps {
  team: Team;
  teamScore: number;
  playerPredictions: { [key: string]: PlayerPrediction };
}

export const PredictionScoreboard: React.FC<PredictionScoreboardProps> = ({
  team,
  teamScore,
  playerPredictions,
}) => {
  const renderPlayerPredictions = () => {
    return Object.entries(playerPredictions).map(([playerName, stats]) => (
      <tr key={playerName}>
        <td>{playerName}</td>
        <td>{stats.kills}</td>
        <td>{stats.deaths}</td>
        <td>{stats.damage}</td>
        <td>{stats.objectives}</td>
      </tr>
    ));
  };

  return (
    <Row>
      <Col xs={12} className="table-container">
        <h4 style={{ float: 'left' }}>{team.name}</h4>
        <h4 style={{ float: 'right' }}>{teamScore}</h4>
        <Table striped bordered hover size="sm" className="custom-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>Kills</th>
              <th>Deaths</th>
              <th>Damage</th>
              <th>Objectives</th>
            </tr>
          </thead>
          <tbody>{renderPlayerPredictions()}</tbody>
        </Table>
      </Col>
    </Row>
  );
};
