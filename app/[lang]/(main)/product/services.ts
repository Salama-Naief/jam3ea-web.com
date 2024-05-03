import apiHandler from '@/lib/utils/apiHandler';
import { IProduct } from './types';

export const getProductBySku = async (sku: string): Promise<IProduct> =>
  await apiHandler(`/product/${sku}`);
