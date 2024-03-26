import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Stepper from 'awesome-react-stepper';

import { GameMode, Team, teams, Map, MapGameModePair, defaultMapSet } from '../models';
import { TeamSelector } from './TeamSelector';
import { MapSetSelector } from './MapSetSelector';
import { usePredictions } from '../hooks';
import '../assets/styles/utility-components.css';
import '../assets/styles/workflow-manager.css';
import '../assets/styles/custom-stepper.css';

export const PredictionWorkFlowManager = () => {
  const [teamOneSelected, setTeamOneSelected] = useState<Team>(teams[0]);
  const [teamTwoSelected, setTeamTwoSelected] = useState<Team>(teams[1]);
  const [mapSet, setMapSet] = useState<MapGameModePair[]>(defaultMapSet);
  const { data, isLoading } = usePredictions(teamOneSelected, teamTwoSelected, mapSet);

  const navigate = useNavigate();

  const handleTeamOneSelection = (selectedTeam: Team) => {
    if (teamTwoSelected === selectedTeam) {
      const defaultTeamTwo = teams.find((team) => team.name != selectedTeam.name) || teams[0];
      setTeamTwoSelected(defaultTeamTwo);
    }
    setTeamOneSelected(selectedTeam);
  };

  const handleTeamTwoSelection = (selectedTeam: Team) => {
    if (teamOneSelected === selectedTeam) {
      return;
    }
    setTeamTwoSelected(selectedTeam);
  };

  const handlePairSelection = (mapNumber: number, map: Map, gameMode: GameMode) => {
    const selectedMapGameModePair: MapGameModePair = { map, gameMode };
    setMapSet((oldMapSet) => {
      const newMapSet = [...oldMapSet];
      newMapSet[mapNumber] = selectedMapGameModePair;
      return newMapSet;
    });
  };

  const viewPredictions = () => {
    navigate('/predictions', {
      state: {
        data: data,
        teamOne: teamOneSelected,
        teamTwo: teamTwoSelected,
        mapSet: mapSet,
      },
    });
  };

  return (
    <Container className="workflow-base" fluid>
      <Stepper
        stroke={3}
        strokeColor="#23043c"
        fillStroke="#826bc8"
        activeColor="#826bc8"
        activeProgressBorder="3px solid #826bc8"
        submitBtn={
          <button disabled={isLoading} className="stepperBtn">
            Submit
          </button>
        }
        continueBtn={<button className="stepperBtn">Next</button>}
        backBtn={<button className="stepperBtn">Back</button>}
        onSubmit={() => viewPredictions()}
      >
        <Row className="workflow-layout mx-lg-1 mx-xl-2 mx-xxl-4">
          <TeamSelector
            onTeamSelection={handleTeamOneSelection}
            teamSelected={teamOneSelected}
            teamOptions={teams}
            flipUI={false}
          />
        </Row>
        <Row className="workflow-layout mx-lg-2 mx-xl-3 mx-xxl-5">
          <TeamSelector
            onTeamSelection={handleTeamTwoSelection}
            teamSelected={teamTwoSelected}
            opponentSelected={teamOneSelected}
            teamOptions={teams}
            flipUI={true}
          />
        </Row>
        <Row className="workflow-layout mx-lg-2 px-lg-4 mx-xl-5 pt-1 pb-5">
          <MapSetSelector
            teamOne={teamOneSelected}
            teamTwo={teamTwoSelected}
            mapSet={mapSet}
            onPairSelection={handlePairSelection}
          />
        </Row>
      </Stepper>
    </Container>
  );
};

export default PredictionWorkFlowManager;
