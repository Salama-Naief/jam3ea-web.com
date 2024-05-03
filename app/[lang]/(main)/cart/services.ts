import { clientRequest } from '@/lib/utils/helpers';
import {
  IAddToCart,
  IAddToCartResponseResult,
  IApplyCoupon,
  IGetCartResponseResult,
  IGetCheckoutResponseResult,
} from './types';
import { IResponse } from '@/lib/types';

export const addToCart = (
  addToCartInputs: IAddToCart
): Promise<IResponse<IAddToCartResponseResult, IAddToCart>> =>
  clientRequest('/cart', 'POST', addToCartInputs);

export const removeFromCart = (
  sku: string
): Promise<IResponse<IAddToCartResponseResult, IAddToCart>> =>
  clientRequest(`/cart/${sku}`, 'DELETE');

export const getCart = (): Promise<IResponse<IGetCartResponseResult>> =>
  clientRequest('/cart');

export const applyCoupon = (applyCouponInputs: IApplyCoupon) =>
  clientRequest('/cart/coupon', 'POST', applyCouponInputs);

export const removeCoupon = (removeCouponInputs: IApplyCoupon) =>
  clientRequest(`/coupon?code=${removeCouponInputs.code}`, 'DELETE');

export const getcheckout = (
  suppliers?: string[],
  cityId?: string
): Promise<IResponse<IGetCheckoutResponseResult>> => {
  const baseUrl = '/checkout';
  const queryString = suppliers
    ? `&supplier_id=${suppliers.join('&supplier_id=')}`
    : '';

  return clientRequest(
    baseUrl + `?city_id=${cityId ? cityId : ''}` + queryString
  );
};

export const checkout = (values: any, cityId?: string): Promise<any> => {
  return clientRequest(
    `https://web.jm3eia.com/api/checkout${cityId ? '?city_id=' + cityId : ''}`,
    'POST',
    values,
    true
  );
};
