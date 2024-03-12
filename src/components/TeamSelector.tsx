import { Team } from '../models';

interface TeamSelectorProps {
  onTeamSelection: (selectedTeam: Team) => void;
}

export const TeamSelector: React.FC<TeamSelectorProps> = ({ onTeamSelection }) => {
  return (
    <>
      <h1>hi</h1>
    </>
  );
};
