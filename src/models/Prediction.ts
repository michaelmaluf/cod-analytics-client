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
  team_one_average_score: number;
  team_two_average_score: number;
  team_one_average_score_against: number;
  team_two_average_score_against: number;
  team_one_average_kd: number;
  team_two_average_kd: number;
  league_average_score: number;
  league_average_kd: number;
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
