'use client';
import React, { useRef } from 'react';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, TextQuote, BookOpenText } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import ArticleSourceBadge from '@/components/ArticleSourceBadge';
import { LibraryBig, Pencil } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Result = () => {
  const { data, isError, isSuccess, isPending, mutate } = useSearch();
  const searchTextRef = useRef('');

  return (
    <div
      className={`flex justify-center mt-5 ${!data && 'h-screen items-center'}`}
    >
      <Card className={`w-full ${!data && 'max-w-lg p-4'}`}>
        <CardHeader>
          <div className='flex items-center justify-between '>
            <div className='w-full flex items-center justify-center space-x-3 '>
              <CardTitle>AI Search</CardTitle>
              <Sparkles />
            </div>
          </div>
          <div className='w-full flex space-x-4 pt-4'>
            <Input
              type='text'
              placeholder='Ask me...'
              className='flex-grow'
              onChange={(event) => {
                searchTextRef.current = event.target.value;
              }}
            />
            <Button
              onClick={() => {
                console.log({ searchTextRef: searchTextRef.current });
                if (searchTextRef.current) {
                  mutate(searchTextRef.current.trim());
                }
              }}
            >
              <ArrowRight className='h-4 w-4' />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {!isPending && !isError && data && data.data.reply && (
            <div>
              <div className='flex space-x-1 items-center py-1'>
                <TextQuote className='h-5 w-4' />
                <p className=''>Answer</p>
              </div>
              <Card className='bg-zinc-50 my-1 p-4'>
                <div>{data.data.reply}</div>
              </Card>
            </div>
          )}
          {!isPending &&
            !isError &&
            data &&
            data.data.sources &&
            Array.isArray(data.data.sources) &&
            data.data.sources.length > 0 && (
              <div className='pt-4'>
                <div className='flex space-x-1 items-center py-1'>
                  <BookOpenText className='h-5 w-4' />
                  <p className=''>Source articles</p>
                </div>

                <div className='flex w-full space-x-1'>
                  {data.data.sources.map((item: any) => {
                    return (
                      <div key={item._id}>
                        <ArticleSourceBadge title={item.title} _id={item._id} />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
        </CardContent>
        {data && <Separator className='mb-4' />}
        <CardFooter className='flex justify-between pt-1'>
          <Link href='/'>
            <Button variant='outline'>
              <LibraryBig className='mr-2 h-4 w-4' />
              View All Articles
            </Button>
          </Link>
          <Link href='/article/create'>
            <Button>
              <Pencil className='mr-2 h-4 w-4' /> Create New Article
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Result;
