import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getArticles, getArticleById, createArticle } from '../api/article';

export const useArticle = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });
};

export const useArticleById = (id: string) => {
  return useQuery({
    queryKey: ['article', id],
    queryFn: () => getArticleById(id),
  });
};

// New mutation for creating an article
export const useCreateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ title, content }: { title: string; content: string }) =>
      createArticle(title, content),
    onSuccess: () => {
      // Invalidate and refetch articles query after a successful mutation
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
};
