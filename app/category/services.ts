import { IDataLoadedResponse, IResponse } from '@/lib/types';
import apiHandler from '@/lib/utils/apiHandler';
import { ICategory } from './types';

export const getCategories = async (): Promise<
  IDataLoadedResponse<ICategory>
> => await apiHandler('/category');
