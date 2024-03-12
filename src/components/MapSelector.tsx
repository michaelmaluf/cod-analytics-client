import { Carousel, Image } from 'react-bootstrap';

import { Map } from '../models';
import '../assets/styles/carousel-styles.css';

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

  const containerStyle = {
    height: '25vh',
  };

  const handleGameModeSelection = (selectedIndex: number) => {
    const mapSelected = mapOptions[selectedIndex];
    onMapSelection(mapSelected);
  };

  return (
    <Carousel
      className="custom-carousel d-flex align-items-center justify-content-center"
      activeIndex={mapIndex}
      onSelect={handleGameModeSelection}
      interval={null}
      indicators={false}
    >
      {mapOptions.map((map) => (
        <Carousel.Item key={map.name} className="bg-dark text-white">
          <Image className="d-block w-100" src={map.image} alt="First slide" fluid />
          <Carousel.Caption>
            <h3 className="text-white">{map.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
