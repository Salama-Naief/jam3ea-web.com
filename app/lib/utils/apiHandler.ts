import 'server-only';

import { LANGUAGES, STATUS_MESSAGES } from '@/lib/enums';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import webRoutes from './webRoutes';
import { IResponse } from '../types';

const apiHandler = async (
  route: string,
  method: string = 'GET',
  body?: object | null | undefined,
  onlyResults = true,
  cache = true
) => {
  try {
    const cookieStore = cookies();
    const visitor_token = cookieStore.get('visitor.token')?.value || null;
    const user_token = cookieStore.get('auth.token')?.value || null;

    const token = user_token ? user_token : visitor_token;

    const language = cookieStore.get('language')?.value;

    const options: RequestInit = {
      method,
      headers: {
        Authorization: 'Bearer ' + token,
        Language:
          language || process.env.DEFAULT_LOCALE_CODE || LANGUAGES.ENGLISH,
        'Content-Type': 'application/json',
      },
      body: body && JSON.stringify(body),
      cache: cache ? 'default' : 'no-store',
    };

    const url = process.env.API_BASE_URL + route;

    const res = await fetch(url, options);
    const resData: IResponse<any, any> = await res.json();

    if (resData.status_message === STATUS_MESSAGES.INVALID_APP_AUTHENTICATION) {
      // TODO: delete cache
      return redirect(webRoutes.splash);
    }

    if (resData.status_message === STATUS_MESSAGES.CITY_REQUIRED) {
      return redirect(webRoutes.splash);
    }

    return method == 'GET' && onlyResults === true ? resData.results : resData;
  } catch (err) {
    console.log('ERR: ', err);
  }
};

export default apiHandler;
