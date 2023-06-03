import { ICartStatus } from './../../types';
import { getDiscountPercentage, getPriceWithCurrency } from '../../utils';

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
}

export default function ProductCard({
  name,
  picture,
  price,
  sku,
  oldPrice,
  isInWhishlist,
}: ProductCardProps) {
  return (
    <button
      type="button"
      //onclick="window.location.replace('/pages/product.html')"
      className="flex-shrink-0 flex flex-col bg-white w-36 rounded-xl p-4 relative overflow-hidden"
    >
      {oldPrice && (
        <div className="bg-danger text-white w-fit px-2 absolute right-0 top-0 text-sm">
          {getDiscountPercentage(parseFloat(price), parseFloat(oldPrice))}
        </div>
      )}
      <button className="group">
        <img
          className="group-hover:hidden"
          src="/assets/like-inactive.svg"
          alt=""
        />

        <img
          className={`${isInWhishlist ? '' : 'hidden'} group-hover:block`}
          src="/assets/like-active.svg"
          alt=""
        />
      </button>
      <div className="w-20 h-20 mx-auto">
        <img className="w-full object-cover" src={picture} /* alt={name} */ />
      </div>
      <button className="text-primary shadow w-5 h-5 flex items-center justify-center p-3 rounded-lg ml-auto">
        +
      </button>
      <div>
        <a href="#">
          <h5 className="text-sm font-bold tracking-tight text-gray-900">
            {getPriceWithCurrency(price)}
          </h5>
        </a>
        <p className="text-xs font-normal text-gray-500">{name}</p>
      </div>
    </button>
  );
}
