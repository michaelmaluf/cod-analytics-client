import { useQuery, useQueries } from '@tanstack/react-query';

import { PredictionService } from '../services';
import { MapGameModePair, PredictionRequest, Team } from '../models';

export const usePrediction = (predictionRequest: PredictionRequest) => {
  const { data, isLoading } = useQuery({
    queryKey: ['fetchPrediction', predictionRequest],
    queryFn: () => PredictionService.fetchPrediction(predictionRequest),
    staleTime: 6 * 60 * 60 * 1000, // 6 hours
  });

  return { data, isLoading };
};

export const usePredictions = (
  teamOne: Team,
  teamTwo: Team,
  mapGameModePairs: MapGameModePair[],
) => {
  const predictionQueries = mapGameModePairs.map((pair) => ({
    queryKey: ['fetchPrediction', teamOne, teamTwo, pair],
    queryFn: () => PredictionService.fetchPrediction({ teamOne, teamTwo, ...pair }),
    staleTime: 6 * 60 * 60 * 1000,
    enabled: !!teamOne && !!teamTwo,
  }));

  const results = useQueries({ queries: predictionQueries });

  // Aggregate or process results here
  const isLoading = results.some((query) => query.isLoading);
  const errors = results.map((query) => query.error).filter(Boolean);
  const data = results.map((query) => query.data).filter(Boolean);

  return { data, isLoading, errors };
};
