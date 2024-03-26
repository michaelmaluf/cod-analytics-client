import { Container, Table } from 'react-bootstrap';

import { PlayerPrediction } from '../models/Prediction';
import { Team } from '../models';
import '../assets/styles/outcome-manager.css';

interface PredictionScoreboardProps {
  team: Team;
  teamScore: number;
  playerPredictions: { [key: string]: PlayerPrediction };
  objectiveKey: string;
}

export const PredictionScoreboard: React.FC<PredictionScoreboardProps> = ({
  team,
  teamScore,
  playerPredictions,
  objectiveKey,
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
    <Container
      className="table-container"
      fluid
      style={{ '--team-color': team.color } as React.CSSProperties}
    >
      <h4 style={{ float: 'left', color: team.color }}>{team.name}</h4>
      <h4 style={{ float: 'right', color: team.color }}>{teamScore}</h4>
      <Table striped bordered hover size="sm" className="custom-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Damage</th>
            <th>{objectiveKey}</th>
          </tr>
        </thead>
        <tbody>{renderPlayerPredictions()}</tbody>
      </Table>
    </Container>
  );
};
