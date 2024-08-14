import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const ArticleSourceBadge = ({ _id, title }: { _id: string; title: string }) => {
  return (
    <div>
      <Link href={`/article/${_id}`}>
        <Badge>{title}</Badge>
      </Link>
    </div>
  );
};
export default ArticleSourceBadge;
