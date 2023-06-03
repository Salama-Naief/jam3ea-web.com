export const getPriceWithCurrency = (price: string | number) => {
  const currency = process.env.CURRENCY || 'KD';
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
