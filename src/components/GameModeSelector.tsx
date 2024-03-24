import { Carousel, Container, Image } from 'react-bootstrap';

import { GameMode } from '../models';
import '../assets/styles/carousel-styles.css';

interface GameModeSelectorProps {
  onGameModeSelection: (selectedGameMode: GameMode) => void;
  gameModeSelected: GameMode;
  gameModeOptions: GameMode[];
}
export const GameModeSelector: React.FC<GameModeSelectorProps> = ({
  onGameModeSelection,
  gameModeSelected,
  gameModeOptions,
}) => {
  const gameModeIndex = gameModeOptions.findIndex((gameMode) => gameMode == gameModeSelected);

  const handleGameModeSelection = (selectedIndex: number) => {
    const gameModeSelected = gameModeOptions[selectedIndex];
    onGameModeSelection(gameModeSelected);
  };

  return (
    <Container className="carousel-base">
      <Carousel
        className="custom-carousel d-flex align-items-center justify-content-center"
        activeIndex={gameModeIndex}
        onSelect={handleGameModeSelection}
        interval={null}
        indicators={false}
        variant="primary"
      >
        {gameModeOptions.map((gameMode) => (
          <Carousel.Item key={gameMode.name} className="text-white">
            <div className="carousel-item-container">
              <Image className="d-block w-100" src={gameMode.image} alt={gameMode.name} fluid />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
