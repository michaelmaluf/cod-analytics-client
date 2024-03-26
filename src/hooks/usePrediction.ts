import { useQuery } from '@tanstack/react-query';

import { PredictionService } from '../services';
import { PredictionRequest } from '../models';

export const usePrediction = (predictionRequest: PredictionRequest) => {
  return useQuery({
    queryKey: ['fetchPrediction', predictionRequest],
    queryFn: () => PredictionService.fetchPrediction(predictionRequest),
    staleTime: 6 * 60 * 60 * 1000, // 6 hours
  });
};
