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

export const getCart = (): Promise<IResponse<IGetCartResponseResult>> =>
  clientRequest('/cart');
