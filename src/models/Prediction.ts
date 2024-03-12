import { GameMode, Team, Map } from '.';

export interface PlayerPrediction {
  kills: number;
  deaths: number;
  damage: number;
  objectives: number;
}

export interface PredictionResults {
  team_one_prediction: number;
  team_two_prediction: number;
  team_one_player_predictions: { [key: string]: PlayerPrediction };
  team_two_player_predictions: { [key: string]: PlayerPrediction };
}

export interface PredictionRequest {
  teamOne: Team;
  teamTwo: Team;
  gameMode: GameMode;
  map: Map;
}

export class PredictionRequestGenerator implements PredictionRequest {
  teamOne: Team;
  teamTwo: Team;
  gameMode: GameMode;
  map: Map;

  constructor(teamOne: Team, teamTwo: Team, gameMode: GameMode, map: Map) {
    this.teamOne = teamOne;
    this.teamTwo = teamTwo;
    this.gameMode = gameMode;
    this.map = map;
  }
}
