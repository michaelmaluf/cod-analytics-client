import { useQuery } from '@tanstack/react-query';

import { RosterService } from '../services';

export const useRosterInfo = () => {
  const { data: rosterInfo, isLoading } = useQuery({
    queryKey: ['rosterInfo'],
    queryFn: () => RosterService.fetchRosters(),
    staleTime: 6 * 60 * 60 * 1000, // 6 hours
  });

  return { rosterInfo, isLoading };
};
