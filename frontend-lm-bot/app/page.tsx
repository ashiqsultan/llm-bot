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
import {
  Sparkles,
  ArrowRight,
  TextQuote,
  BookOpenText,
  Loader2,
  CircleHelp,
} from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import ArticleSourceBadge from '@/components/ArticleSourceBadge';
import { LibraryBig, Pencil } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import SkeletonCard from '@/components/SkeletonCard';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const Result = () => {
  const { data, isError, isSuccess, isPending, mutate } = useSearch();
  const searchTextRef = useRef('');

  const searchHandler = () => {
    console.log({ searchTextRef: searchTextRef.current });
    if (searchTextRef.current) {
      mutate(searchTextRef.current.trim());
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      searchHandler();
    }
  };

  return (
    <div
      className={`flex justify-center mt-5 h-screen ${
        data || isPending ? 'items-start' : 'items-center'
      }`}
    >
      <Card
        className={`w-full p-4 ${
          data || isPending ? 'max-w-full' : 'max-w-lg'
        }`}
      >
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
              onKeyDown={handleKeyPress}
            />
            <Button onClick={searchHandler}>
              {isPending ? (
                <Loader2 className='h-5 w-5 animate-spin' />
              ) : (
                <ArrowRight className='h-5 w-5' />
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isPending && <SkeletonCard />}
          {!isPending && !isError && data && data.data.reply && (
            <div>
              <div className='flex space-x-1 items-center py-1'>
                <TextQuote className='h-5 w-4' />
                <p>Answer</p>
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
                <div className='flex w-full space-x-1 pt-1'>
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

          <Collapsible className='mt-4'>
            <CollapsibleTrigger className='hover:underline  hover:text-slate-700 text-blue-950 flex items-center font-bold text-sm'>
              <CircleHelp className='mr-2 h-4 w-4' /> How it works
            </CollapsibleTrigger>
            <CollapsibleContent className='mt-2'>
              <blockquote className=' border-l-4 border-gray-600 bg-gray-100 p-4 text-gray-800 text-sm'>
                <ul className='pl-4 list-outside space-y-2'>
                  <li>
                    📝 Create new articles with a title and content—any text
                    data you want to store.
                  </li>
                  <li>
                    ❓ Ask questions based on the articles created.
                  </li>
                  <li>
                    ✨ Voilà! The AI will provide a seamless search and
                    retrieval experience using your content.
                  </li>
                </ul>
              </blockquote>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
        {data && <Separator className='mb-4' />}
        <CardFooter className='flex justify-between pt-1 space-x-3 max-md:flex-col max-md:space-y-3 '>
          <Link href='/article' className='w-full'>
            <Button variant='outline' className='w-full'>
              <LibraryBig className='mr-2 h-4 w-4' />
              View All Articles
            </Button>
          </Link>
          <Link href='/article/create' className='w-full'>
            <Button className='w-full'>
              <Pencil className='mr-2 h-4 w-4' /> Create New Article
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Result;
