import { ICartStatus } from '../types';
import { getDiscountPercentage, getPriceWithCurrency } from '../utils';
import AddToCartButton from '@/module/cart/components/AddToCartButton';
import AddToWishlist from '@/module/wishlist/components/AddToWishlist';
import webRoutes from '@/lib/utils/webRoutes';
import Link from 'next/link';

interface ProductCardProps {
  sku: string;
  price: string;
  oldPrice?: string;
  picture: string;
  name: string;
  isAvailable: boolean;
  cartStatus: ICartStatus;
  isInWhishlist: boolean;
  maxQuantityCart: number;
  hasVariants: boolean;
  currency: string;
  className?: string;
}

export default function ProductCard({
  name,
  picture,
  price,
  sku,
  oldPrice,
  isInWhishlist,
  cartStatus,
  isAvailable,
  maxQuantityCart,
  currency,
  hasVariants,
  className = '',
}: ProductCardProps) {
  return (
    <div
      className={`flex-shrink-0 flex flex-col bg-white w-full rounded-xl p-4 relative overflow-hidden ${className}`}
    >
      {oldPrice && (
        <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
          {getDiscountPercentage(parseFloat(price), parseFloat(oldPrice))}
        </div>
      )}
      <AddToWishlist sku={sku} isInWhishlist={isInWhishlist} />
      <Link href={webRoutes.product(sku)}>
        <div className="w-20 h-20 mx-auto">
          <img className="w-full object-cover" src={picture} /* alt={name} */ />
        </div>
      </Link>
      <AddToCartButton
        sku={sku}
        cartsStatus={cartStatus}
        maxQantity={maxQuantityCart}
        isAvailable={isAvailable}
        hasVariant={hasVariants}
      />
      <Link href={webRoutes.product(sku)} prefetch={false}>
        <div>
          <h5 className="text-sm font-bold tracking-tight text-gray-900">
            {getPriceWithCurrency(price, currency)}
          </h5>
          <p className="text-xs font-normal text-gray-500">{name}</p>
        </div>
      </Link>
    </div>
  );
}
