import { clientRequest } from '@/lib/utils/helpers';
import { IAddToWishlist, IAddToWishlistResponseResult } from './types';
import { IResponse } from '@/lib/types';

export const addToWishlist = (
  addToWhishlistInputs: IAddToWishlist
): Promise<IResponse<IAddToWishlistResponseResult, IAddToWishlist>> =>
  clientRequest('/wishlist', 'POST', addToWhishlistInputs);

export const removeFromWishlist = (
  sku: string
): Promise<IResponse<IAddToWishlistResponseResult, IAddToWishlist>> =>
  clientRequest(`/wishlist/${sku}`, 'DELETE');
