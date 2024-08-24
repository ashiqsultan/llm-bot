import Link from 'next/link';
import { Button } from './ui/button';
import { LibraryBig, Pencil, Sparkles } from 'lucide-react';

const NavLinks = ({ home = false, create = false, all = false }) => {
  return (
    <div className='flex justify-start space-x-4 my-4'>
      {home && (
        <Link href='/'>
          <Button>
            <Sparkles className='mr-2 h-4 w-4' />
            AI Search
          </Button>
        </Link>
      )}

      {all && (
        <Link href='/article'>
          <Button>
            <LibraryBig className='mr-2 h-4 w-4' />
            All Articles
          </Button>
        </Link>
      )}
      {create && (
        <Link href='/article/create'>
          <Button>
            <Pencil className='mr-2 h-4 w-4' />
            Create New Article
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavLinks;
