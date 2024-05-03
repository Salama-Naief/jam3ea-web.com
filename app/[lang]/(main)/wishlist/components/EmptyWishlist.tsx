import { EmptyWishlistIcon } from '@/components/Icons';
import webRoutes from '@/lib/utils/webRoutes';
import Link from 'next/link';

interface EmptyWishListProps {
  dictionary: {
    wishlist_empty: string;
    back_to_home: string;
  };
}

export default function EmptyWishList({ dictionary }: EmptyWishListProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full mt-14">
        <EmptyWishlistIcon />
        <h2 className="text-md font-bold mt-3">{dictionary.wishlist_empty}</h2>
      </div>
      <Link
        href={webRoutes.home}
        className="w-full block bg-primary py-2 rounded-full text-white mt-10 text-center"
      >
        {dictionary.back_to_home}
      </Link>
    </div>
  );
}
