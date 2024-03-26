import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Cell } from 'recharts';

import { Team } from '../models';
import '../assets/styles/data-visualizer.css';
import { Container } from 'react-bootstrap';

interface DataVisualizerProps {
  teamOne: Team;
  teamTwo: Team;
  teamOneAverage: number;
  teamTwoAverage: number;
  leagueAverage: number;
  targetScore: number;
  dataKey: string;
}

export const DataVisualizer: React.FC<DataVisualizerProps> = ({
  teamOne,
  teamTwo,
  teamOneAverage,
  teamTwoAverage,
  leagueAverage,
  targetScore,
  dataKey,
}) => {
  const teamData = [
    { name: teamOne.name, value: teamOneAverage, color: teamOne.color },
    { name: teamTwo.name, value: teamTwoAverage, color: teamTwo.color },
  ];

  return (
    <Container className="d-flex justify-content-center flex-column align-items-center">
      <h3 style={{ textAlign: 'center', color: 'white' }} className="mb-3">
        {dataKey}
      </h3>
      <BarChart
        width={600}
        height={200}
        data={teamData}
        layout="vertical" // This makes the bar chart horizontal
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="visualizer-base"
      >
        <CartesianGrid strokeDasharray="3 3" stroke="white" />
        <XAxis
          type="number"
          axisLine={{ stroke: 'white', strokeDasharray: '3 3' }}
          tick={{ fill: 'white' }}
          domain={[0, targetScore]}
          tickCount={7}
        />
        <YAxis
          dataKey="name"
          type="category"
          width={100}
          axisLine={{ stroke: 'white', strokeDasharray: '3 3' }}
          tick={{ fill: 'white' }}
        />
        <Tooltip />
        {/* <Legend payload={customLegendPayload} /> */}
        <Bar dataKey="value" barSize={75}>
          {/* <LabelList dataKey="value" style={{ fill: 'white' }} /> */}
          {teamData.map((team, index) => (
            <Cell key={`cell-${index}`} fill={team.color} />
          ))}
        </Bar>
        <ReferenceLine
          x={leagueAverage}
          stroke="white"
          label={{ position: 'top', value: 'League Avg', fill: 'white', fontSize: 15, dy: -5 }}
        />
      </BarChart>
    </Container>
  );
};
