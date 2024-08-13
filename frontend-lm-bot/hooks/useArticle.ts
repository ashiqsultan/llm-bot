import { useQuery } from "@tanstack/react-query";
import { getArticles, getArticleById } from "../api/article";

export const useArticle = () => {
  return useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });
};

export const useArticleById = (id: string) => {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => getArticleById(id),
  });
};
