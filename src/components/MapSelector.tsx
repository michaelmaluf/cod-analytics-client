import { Carousel, Container, Image } from 'react-bootstrap';

import { Map } from '../models';
import '../assets/styles/carousel-styles.css';
import '../assets/styles/utility-components.css';

interface MapSelectorProps {
  onMapSelection: (selectedMap: Map) => void;
  mapSelected: Map;
  mapOptions: Map[];
}

export const MapSelector: React.FC<MapSelectorProps> = ({
  onMapSelection,
  mapSelected,
  mapOptions,
}) => {
  const mapIndex = mapOptions.findIndex((map) => map == mapSelected);

  const handleGameModeSelection = (selectedIndex: number) => {
    const mapSelected = mapOptions[selectedIndex];
    onMapSelection(mapSelected);
  };

  return (
    <Container className="carousel-base">
      <Carousel
        className="custom-carousel d-flex align-items-center justify-content-center"
        activeIndex={mapIndex}
        onSelect={handleGameModeSelection}
        interval={null}
        indicators={false}
      >
        {mapOptions.map((map) => (
          <Carousel.Item>
            <Image className="d-block w-100" src={map.image} alt={map.name} fluid />
            <div className="map-name-caption">
              <h3>{map.name}</h3>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
