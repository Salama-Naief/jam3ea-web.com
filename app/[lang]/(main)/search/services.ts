import { clientRequest } from '@/lib/utils/helpers';
import { IDataLoadedResponse, IResponse } from '@/lib/types';
import { IProduct } from '../product/types';
import apiHandler from '@/lib/utils/apiHandler';

export const searchProduct = async (
  q = '',
  supplierId?: string
): Promise<IDataLoadedResponse<IProduct>> =>
  await apiHandler(
    `/product?q=${q}${supplierId ? '&supplier_id=' + supplierId : ''}`
  );
