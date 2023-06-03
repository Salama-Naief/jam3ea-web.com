import { IDataLoadedResponse } from '@/lib/types';
import apiHandler from '@/lib/utils/apiHandler';
import { IFeature } from './types';

export const getFeaturedProducts = async (): Promise<IFeature[]> =>
  await apiHandler('/product/featured');
