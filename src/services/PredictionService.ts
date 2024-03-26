import { PredictionResults, PredictionRequest } from '../models';

export const PredictionService = {
  async fetchPrediction(predictionRequest: PredictionRequest | undefined) {
    if (!predictionRequest) {
      throw new Error('The prediction request is not valid.');
    }
    const predictionParams = new URLSearchParams({
      team_one_name: predictionRequest.teamOne.name,
      team_two_name: predictionRequest.teamTwo.name,
      game_mode: predictionRequest.gameMode.name,
      map: predictionRequest.map.name,
    });

    const predictionUrlWithParams = import.meta.env.VITE_PREDICTION_URL + `?${predictionParams}`;

    const predictionResponse = await fetch(predictionUrlWithParams, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!predictionResponse.ok) {
      throw new Error('Prediction data is unavailable at this time.');
    }

    const predictionResults: PredictionResults = await predictionResponse.json();

    return predictionResults;

    console.log(predictionResponse.json());
  },
};
