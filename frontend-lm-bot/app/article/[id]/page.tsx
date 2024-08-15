'use client';
import { useArticleById } from '@/hooks/useArticle';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import NavLinks from '@/components/NavLinks';

const ArticleView = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const { data, isLoading, error } = useArticleById(id);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading article.</p>;

  return (
    <div>
      <Card className=' mt-8 p-2'>
        <CardHeader>
          <NavLinks home all create />
          <CardTitle>{data?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data?.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleView;
