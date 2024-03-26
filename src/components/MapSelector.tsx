import { Carousel, Container, Image } from 'react-bootstrap';

import { GameMode, Map } from '../models';
import '../assets/styles/carousel-styles.css';
import '../assets/styles/utility-components.css';

interface MapSelectorProps {
  onMapSelection: (selectedMap: Map, gameMode: GameMode) => void;
  mapSelected: Map;
  mapOptions: Map[];
  gameMode: GameMode;
}

export const MapSelector: React.FC<MapSelectorProps> = ({
  onMapSelection,
  mapSelected,
  mapOptions,
  gameMode,
}) => {
  const mapIndex = mapOptions.findIndex((map) => map == mapSelected);

  const handleMapSelection = (selectedIndex: number) => {
    const mapSelected = mapOptions[selectedIndex];
    onMapSelection(mapSelected, gameMode);
  };

  return (
    <Container className="carousel-base">
      <Carousel
        className="custom-carousel d-flex align-items-center justify-content-center"
        activeIndex={mapIndex}
        onSelect={handleMapSelection}
        interval={null}
        indicators={false}
      >
        {mapOptions.map((map) => (
          <Carousel.Item key={map.name}>
            <Image className="d-block" src={map.image} alt={map.name} />
            <div className="map-name-caption">
              <h3>{gameMode.name}</h3>
              <h3>{map.name}</h3>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
