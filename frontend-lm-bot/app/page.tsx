"use client";
import { useArticle } from "@/hooks/useArticle";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DialogComponent from "@/components/ArticleView";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  const { data, isLoading, isFetched } = useArticle();

  const [selectedArticle, setSelectedArticle] = useState(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeDialog = () => setIsDialogOpen(false);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
    setIsDialogOpen(true);
  };

  if (isLoading) return <>Loading...</>;

  return (
    <div className="container h-screen">
      {selectedArticle && (
        <DialogComponent
          isOpen={isDialogOpen}
          onClose={closeDialog}
          article={selectedArticle}
        />
      )}
      <div className="py-4">
        <Button>
          <Link href="/article/create">Create New Article</Link>
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 ">
        {data.map((article: any) => (
          <Card
            key={article.id}
            className="w-full md:w-1/3 lg:w-1/4 cursor-pointer"
            onClick={() => handleCardClick(article)}
          >
            <CardHeader className="font-semibold">{article.title}</CardHeader>
            <CardContent className="text-sm">
              {article.content.substring(0, 100)}...
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
