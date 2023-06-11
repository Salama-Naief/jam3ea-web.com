import { IDataLoadedResponse, IResponse } from '@/lib/types';
import apiHandler from '@/lib/utils/apiHandler';
import { ICategory } from './types';
import { IProduct } from '@/product/types';

export const getCategories = async (): Promise<
  IDataLoadedResponse<ICategory>
> => await apiHandler('/category');

export const getCategoryProducts = async (id: string): Promise<
  IDataLoadedResponse<IProduct>
> => await apiHandler(`/product/5d382a2083545d0366ac4289/category`);
