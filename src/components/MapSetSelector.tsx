import { Col, Image, Nav, Row, Tab } from 'react-bootstrap';

import { GameMode, Map, MapGameModePair, Team } from '../models';
import '../assets/styles/carousel-styles.css';
import '../assets/styles/utility-components.css';
import { MapSelector } from './MapSelector';

interface MapSetSelectorProps {
  teamOne: Team;
  teamTwo: Team;
  mapSet: MapGameModePair[];
  onPairSelection: (mapNumber: number, map: Map, gameMode: GameMode) => void;
}

export const MapSetSelector: React.FC<MapSetSelectorProps> = ({
  onPairSelection,
  mapSet,
  teamOne,
  teamTwo,
}) => {
  return (
    <Tab.Container defaultActiveKey="map1">
      <Row className="align-items-start justfiy-content-center pt-2">
        <Col className="team-showcase-col mt-2 me-3">
          <div
            className="team-showcase"
            style={{
              border: `0.5px solid ${teamOne.color}`,
              background: `linear-gradient(145deg, #1d0f28 0%, #2f3360 50%, ${teamOne.color} 150%)`,
            }}
          >
            <h2 className="team-id">Team A</h2>
            <Image className="logo-size" src={teamOne.logo} rounded />
            <h2>{teamOne.name}</h2>
          </div>
        </Col>
        <Col xs={5} className="map-selection-col pb-3">
          <Tab.Content className="d-flex align-items-center">
            {mapSet.map((mapGameModePair, index) => (
              <Tab.Pane eventKey={`map${index + 1}`} key={index}>
                <MapSelector
                  onMapSelection={(mapSelected, gameMode) =>
                    onPairSelection(index, mapSelected, gameMode)
                  }
                  mapSelected={mapGameModePair.map}
                  mapOptions={mapGameModePair.gameMode.maps.filter((map) => {
                    if (index === 2) return map;
                    const complementIndex = (index + 3) % 6;
                    return map.name != mapSet[complementIndex].map.name;
                  })}
                  gameMode={mapGameModePair.gameMode}
                />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
        <Col className="team-showcase-col mt-2 ms-3">
          <div
            className="team-showcase"
            style={{
              border: `0.5px solid ${teamTwo.color}`,
              background: `linear-gradient(145deg, #1d0f28 0%, #2f3360 30%, ${teamTwo.color} 150%)`,
            }}
          >
            <h2 className="team-id">Team B</h2>
            <Image className="logo-size" src={teamTwo.logo} rounded fluid />
            <h2>{teamTwo.name}</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav variant="pills" className="map-set-preview d-flex justify-content-center">
            {mapSet.map((mapGameModePair, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={`map${index + 1}`}>
                  <div className="nav-item-container">
                    <Image className="nav-map-image" src={mapGameModePair.map.image} rounded />
                    <div className="fw-bold">{`Map ${index + 1}`}</div>
                  </div>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
      </Row>
    </Tab.Container>
  );
};
