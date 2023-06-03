import { STATUS_MESSAGES } from '@/lib/enums';

export interface IDataLoadedResponse<T> {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  data: T[];
}


export interface IResponse<T, R = unknown> {
  success: boolean;
  status_code: number;
  status_message: STATUS_MESSAGES;
  errors: R | null;
  results: T | null;
}
