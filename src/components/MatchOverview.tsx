import { Col, Row, Image } from 'react-bootstrap';
import { Team } from '../models';

interface MatchOverviewProps {
  teamOne: Team;
  teamTwo: Team;
  teamOneMapsWon: number;
  teamTwoMapsWon: number;
}

export const MatchOverview: React.FC<MatchOverviewProps> = ({
  teamOne,
  teamTwo,
  teamOneMapsWon,
  teamTwoMapsWon,
}) => {
  return (
    <Row className="match-overview my-4">
      <Col md={4} className="d-flex align-items-center justify-content-end">
        <h3>{teamOne.name}</h3>
        <Image className="logo-overview" src={teamOne.logo} roundedCircle />
      </Col>
      <Col xs={12} md={4}>
        <h1 style={{ letterSpacing: '25px' }}>
          {teamOneMapsWon}-{teamTwoMapsWon}
        </h1>
      </Col>
      <Col md={4} className="d-flex align-items-center justify-content-start">
        <Image className="logo-overview" src={teamTwo.logo} roundedCircle />
        <h3>{teamTwo.name}</h3>
      </Col>
    </Row>
  );
};
