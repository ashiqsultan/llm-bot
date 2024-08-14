'use client';
import React, { useRef, useState } from 'react';
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

const Result = () => {
  const { data, isError, isSuccess, isPending, mutate } = useSearch();
  const searchTextRef = useRef('');

  return (
    <div className={'h-screen mt-4'}>
      <Card className=''>
        <CardHeader>
          <div className='flex justify-center'>
            <Sparkles />
          </div>
          {/* <CardTitle>AI Search</CardTitle> */}
          <div className='w-full flex space-x-4 pt-2'>
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
              <Card className='bg-zinc-50  p-4'>
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
                  <p className=''>Sources</p>
                </div>
                {data.data.sources.map((item: any) => {
                  return (
                    <>
                      <ArticleSourceBadge title={item.title} _id={item._id} />
                    </>
                  );
                })}
              </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
};
export default Result;
