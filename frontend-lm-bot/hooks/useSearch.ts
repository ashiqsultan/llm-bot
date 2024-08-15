import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { aiSearch } from '../api/search';

export const useSearch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (msg: string) => aiSearch(msg),
    onSuccess: () => {},
  });
};
