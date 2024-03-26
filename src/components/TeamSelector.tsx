import { Container, ListGroup, Image, Row, Col, Card } from 'react-bootstrap';

import { Player, Team } from '../models';
import { useRosterInfo } from '../hooks';
import { getOrdinalNumber } from '../utils';
import '../assets/styles/team-selector.css';

interface TeamSelectorProps {
  onTeamSelection: (selectedTeam: Team) => void;
  teamSelected: Team;
  opponentSelected?: Team;
  teamOptions: Team[];
  flipUI: boolean;
}

export const TeamSelector: React.FC<TeamSelectorProps> = ({
  onTeamSelection,
  teamSelected,
  opponentSelected,
  teamOptions,
  flipUI,
}) => {
  const { rosterInfo } = useRosterInfo();

  const selectedRoster = rosterInfo?.find((roster) => roster.name == teamSelected?.name);
  return (
    <Container
      className="team-selector-container px-lg-3 py-lg-3"
      style={{ '--team-color': teamSelected.color } as React.CSSProperties}
      fluid
    >
      <Row className={`${flipUI ? 'flex-row-reverse' : ''} justify-content-around`}>
        <Col md={4} className="team-selector-col">
          <ListGroup>
            {teamOptions.map((team) => (
              <ListGroup.Item
                key={team.name}
                action
                active={team.name === teamSelected.name}
                disabled={team.name === opponentSelected?.name}
                onClick={() => onTeamSelection(team)}
                className="listing"
                style={{ '--team-color': team.color } as React.CSSProperties}
              >
                <Image className="logo-size" src={team.logo} rounded fluid />
                {team.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={8} className="player-display-col">
          <Row className="h-100 py-5">
            {selectedRoster?.players.map((player: Player) => (
              <Col key={player.name} xs={1} md={3} className="g-4">
                <Card className="player-card">
                  <div className="player-headshot">
                    <div
                      className="background-logo"
                      style={{
                        background: `url(${teamSelected.logo}) center center / cover no-repeat`,
                      }}
                    ></div>
                    <Card.Img
                      variant="top"
                      src={`${import.meta.env.VITE_IMAGE_URL}/players/${player.name.toLowerCase()}.webp`}
                    />
                  </div>
                  <h2 className="player-name">{player.name}</h2>
                  <div className="player-stats">
                    <p>Hardpoint: {getOrdinalNumber(player.hardpointRank)}</p>
                    <p>Search & Destroy: {getOrdinalNumber(player.searchAndDestroyRank)}</p>
                    <p>Control: {getOrdinalNumber(player.controlRank)}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
