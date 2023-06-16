import { isLoggedIn } from '@/lib/utils/serverHelpers';
import webRoutes from '@/lib/utils/webRoutes';
import Link from 'next/link';

interface NoteBarProps {
  dictionary: {
    free_points: string;
    free_points_description: string;
  };
}

export default function NoteBar({ dictionary }: NoteBarProps) {
  return (
    <>
      {!isLoggedIn() && (
        <Link href={webRoutes.register} className="flex items-center mb-2">
          <div className="bg-primary h-8 rounded-bl-2xl flex items-center justify-center text-xs text-white w-1/4">
            {dictionary.free_points}
          </div>

          <div className="bg-secondary text-white py-2 text-xs overflow-hidden rounded-tr-2xl w-3/4">
            {/* <div
              className="flex whitespace-nowrap"
              style={{ animation: ' ticker 10s linear infinite' }}
            > */}
            <div className="mx-8">{dictionary.free_points_description}</div>
            {/* </div> */}
          </div>
        </Link>
      )}
    </>
  );
}
