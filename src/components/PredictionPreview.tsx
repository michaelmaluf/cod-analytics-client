import { Container, Image } from 'react-bootstrap';

import { MapGameModePair, Team } from '../models';

interface PredictionPreviewProps {
  mapGameModePair: MapGameModePair;
  teamOne: Team;
  teamTwo: Team;
  teamOneScore: number;
  teamTwoScore: number;
}

export const PredictionPreview: React.FC<PredictionPreviewProps> = ({
  mapGameModePair,
  teamOne,
  teamTwo,
  teamOneScore,
  teamTwoScore,
}) => {
  const outlineColor = teamOneScore > teamTwoScore ? teamOne.color : teamTwo.color;
  return (
    <Container className="prediction-preview">
      <h3>{mapGameModePair.gameMode.name}</h3>
      <Image src={mapGameModePair.map.image} />
      <h3>{mapGameModePair.map.name}</h3>
      <div className="result-preview" style={{ borderColor: outlineColor }}>
        <Image src={teamOne.logo} />
        <h3>
          {teamOneScore} - {teamTwoScore}
        </h3>
        <Image src={teamTwo.logo} />
      </div>
    </Container>
  );
};
