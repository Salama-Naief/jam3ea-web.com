import { IDataLoadedResponse } from '@/lib/types';
import apiHandler from '@/lib/utils/apiHandler';
import { IFeature } from './types';
import { IProduct } from '@/module/product/types';

export const getFeaturedProducts = async (
  supplierId?: string
): Promise<IFeature[]> =>
  await apiHandler(
    `/product/featured${supplierId ? '?supplier_id=' + supplierId : ''}`
  );

export const getProductsByFeature = async (
  id: string
): Promise<IDataLoadedResponse<IProduct>> =>
  await apiHandler(`/product/${id}/category?featured=true`);
