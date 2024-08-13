"use client";
import { useArticleById } from "@/hooks/useArticle";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ArticleView = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const { data, isLoading, error } = useArticleById(id);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading article.</p>;

  return (
    <Card className="max-w-xl mx-auto mt-8 p-4">
      <CardHeader>
        <CardTitle>{data?.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data?.content}</p>
      </CardContent>
    </Card>
  );
};

export default ArticleView;
