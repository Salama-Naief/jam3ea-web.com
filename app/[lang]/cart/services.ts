import { clientRequest } from '@/lib/utils/helpers';
import {
  IAddToCart,
  IAddToCartResponseResult,
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
