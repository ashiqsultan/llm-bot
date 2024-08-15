import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  TextQuote,
  Newspaper,
  Library,
} from 'lucide-react';

const ArticleSourceBadge = ({ _id, title }: { _id: string; title: string }) => {
  return (
    <Link href={`/article/${_id}`}>
      <Badge>
        <Newspaper className='h-4 w-4 mr-2'/>
        {title}
      </Badge>
    </Link>
  );
};
export default ArticleSourceBadge;
