import { IDataLoadedResponse, IResponse } from '@/lib/types';
import { ICity } from './types';
import { clientRequest } from '@/lib/utils/helpers';

export const getCities = async (): Promise<
  IResponse<IDataLoadedResponse<ICity>>
> => clientRequest('/city');
