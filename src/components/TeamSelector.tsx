import { useEffect } from 'react';
import { Container, ListGroup, Image } from 'react-bootstrap';

import { GameMode, gameModes, Team, teams, Map, maps } from '../models';
import '../assets/styles/team-selector.css';

interface TeamSelectorProps {
  onTeamSelection: (selectedTeam: Team) => void;
  teamSelected: Team;
  opponentSelected: Team;
  teamOptions: Team[];
}

export const TeamSelector: React.FC<TeamSelectorProps> = ({
  onTeamSelection,
  teamSelected,
  opponentSelected,
  teamOptions,
}) => {
  return (
    <Container className="component-base">
      <ListGroup>
        {teamOptions.map((team) => (
          <ListGroup.Item
            key={team.name}
            action
            active={team.name === teamSelected.name}
            disabled={team.name === opponentSelected.name}
            onClick={() => onTeamSelection(team)}
            className="listing"
          >
            <Image className="logo-size" src={team.logo} rounded fluid />
            {team.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
