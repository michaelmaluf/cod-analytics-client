import { Carousel, Container, Image } from 'react-bootstrap';

import { GameMode } from '../models';
import '../assets/styles/carousel-styles.css'

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

  const containerStyle = {
    height: '25vh',
  };

  const handleGameModeSelection = (selectedIndex: number) => {
    const gameModeSelected = gameModeOptions[selectedIndex];
    onGameModeSelection(gameModeSelected);
  };

  return (
    <Carousel
      className="custom-carousel d-flex align-items-center justify-content-center"
      activeIndex={gameModeIndex}
      onSelect={handleGameModeSelection}
      interval={null}
      indicators={false}
    >
      {gameModeOptions.map((gameMode) => (
        <Carousel.Item key={gameMode.name} className="bg-dark text-white">
          <Image className="d-block w-100" src={gameMode.image} alt={gameMode.name} fluid />
          <Carousel.Caption>
            <h3 className="text-white">{gameMode.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
