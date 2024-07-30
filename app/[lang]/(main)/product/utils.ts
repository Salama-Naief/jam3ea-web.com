import { Locale } from "../../../../i18n-config";

export const getPriceWithCurrency = (
  price: string | number,
  currency: string
) => {
  return `${currency} ${price}`;
};

export const getDiscountPercentage = (
  price: number,
  oldPrice?: number | undefined
) => {
  if (!oldPrice) return;
  const discount = oldPrice - price;
  const discountPercentage = (discount / oldPrice) * 100;
  return `${discountPercentage.toFixed(0)}% Off`;
};

export const getProductQuantityPrice = (price: number, quantity: number) => {
  const total = price * quantity;
  return total.toFixed(3);
};

interface Props {
  price: string;
  oldPrice?: string;
  vipPrice?: string;
  vipOldPrice?: string;
  isVip?: boolean;
}
export const getPrice = ({
  isVip = false,
  price,
  oldPrice,
  vipOldPrice,
  vipPrice,
}: Props) => {
  if (isVip && isVip !== undefined && vipPrice) {
    if (vipOldPrice && vipPrice) {
      const discount = getDiscountPercentage(
        parseFloat(vipPrice),
        parseFloat(vipOldPrice)
      );
      return {
        discount,
        price: vipPrice,
        oldPrice: vipOldPrice,
      };
    } else if (vipPrice && !vipOldPrice) {
      return {
        discount: undefined,
        price: vipPrice,
        oldPrice: undefined,
      };
    }
  } else {
    const discount = getDiscountPercentage(
      parseFloat(price),
      oldPrice ? parseFloat(oldPrice) : undefined
    );
    return {
      discount,
      price: price,
      oldPrice: oldPrice && parseFloat(oldPrice) > 0 ? oldPrice : undefined,
    };
  }
};
