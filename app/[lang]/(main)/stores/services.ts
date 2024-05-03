import { IDataLoadedResponse } from '@/lib/types';
import apiHandler from '@/lib/utils/apiHandler';
import { IInventory, ISupplier } from './types';

export const getInventories = async (): Promise<
  IDataLoadedResponse<IInventory>
> => await apiHandler('/inventory');

export const getSupplierById = async (id: string): Promise<ISupplier> =>
  await apiHandler(`/supplier/${id}`);
