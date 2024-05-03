import { Locale } from '../../../i18n-config';

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
