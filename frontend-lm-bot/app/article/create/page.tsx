'use client';
import React, { useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NavLinks from '@/components/NavLinks';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCreateArticle } from '@/hooks/useArticle';
import ArticleCreateSuccess from '@/components/ArticleCreateSuccess';
import ArticleCreateError from '@/components/ArticleCreateError';
import { useRouter } from 'next/navigation';

const CreateArticle = () => {
  const router = useRouter();

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const { mutate, isPending, isError, isSuccess } = useCreateArticle();

  const handleCreate = () => {
    console.log({ title, content });
    mutate({ title, content });
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        router.push('/', { scroll: false });
      }, 1000);
    }
  }, [isSuccess]);

  return (
    <div className='my-4 mx-4'>
      <NavLinks home all />
      <Card className='p-4'>
        {isError && <ArticleCreateError />}
        {isSuccess && <ArticleCreateSuccess />}
        <CardHeader className='my-1'>
          <h2 className='text-xl font-semibold'>Create Article</h2>
        </CardHeader>
        <CardContent>
          <div className='mb-4'>
            <Input
              type='text'
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='p-2'
            />
          </div>
          <Textarea
            placeholder='Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='h-40 p-2'
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreate} className='mt-4'>
            {isPending ? 'Creating...' : 'Create Article'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateArticle;
