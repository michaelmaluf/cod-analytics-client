import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import { RosterService } from '../services';

export const usePrefetchRosters = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetchRosters = async () => {
      await queryClient.prefetchQuery({
        queryKey: ['rosterInfo'],
        queryFn: () => RosterService.fetchRosters(),
        staleTime: 6 * 60 * 60 * 1000,
      });
    };

    prefetchRosters();
  }, [queryClient]);
};
