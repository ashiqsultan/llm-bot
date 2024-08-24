'use client';
import { useArticle } from '@/hooks/useArticle';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import DialogComponent from '@/components/ArticleView';
import NavLinks from '@/components/NavLinks';
import { Article, columns } from './columns';
import { DataTable } from './data-table';

const Home = () => {
  const { data, isLoading, isFetched } = useArticle();

  const [selectedArticle, setSelectedArticle] = useState(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeDialog = () => setIsDialogOpen(false);

  const handleCardClick = (article: any) => {
    setSelectedArticle(article);
    setIsDialogOpen(true);
  };

  if (isLoading) return <>Loading...</>;

  return (
    <div className='container h-screen'>
      {selectedArticle && (
        <DialogComponent
          isOpen={isDialogOpen}
          onClose={closeDialog}
          article={selectedArticle}
        />
      )}
      <NavLinks home create />
      <h1 className='text-3xl font-bold my-4'>Articles</h1>
      {Array.isArray(data) && data.length > 0 ? (
        <DataTable
          columns={columns}
          data={data.map((article: Article) => {
            return {
              ...article,
              title: article.title.substring(0, 50),
              content: article.content.substring(0, 100),
            };
          })}
        />
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
};

export default Home;
