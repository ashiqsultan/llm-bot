'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Article = {
  _id: string;
  title: string;
  content: string;
};

export const columns: ColumnDef<Article>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'content',
    header: 'Content',
  },
];
