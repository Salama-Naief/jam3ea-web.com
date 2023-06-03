import { STATUS_MESSAGES } from '@/lib/enums';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import webRoutes from './webRoutes';
import { IResponse } from '../types';
import { checkAuth } from './serverHelpers';

const apiHandler = async (
  route: string,
  method: string = 'GET',
  body?: object | null | undefined,
  onlyResults = true
) => {
  const cookieStore = cookies();
  const visitor_token = cookieStore.get('visitor.token')?.value || null;
  const user_token = cookieStore.get('auth.token')?.value || null;

  const token = user_token ? user_token : visitor_token;

  const options: RequestInit = {
    method,
    headers: {
      Authorization: 'Bearer ' + token,
      Language: 'en',
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body),
  };

  const url = process.env.API_BASE_URL + route;

  const res = await fetch(url, options);
  const resData: IResponse<any, any> = await res.json();

  if (resData.status_message === STATUS_MESSAGES.INVALID_APP_AUTHENTICATION) {
    if (user_token) {
      NextResponse.next().cookies.delete('auth.token');
      NextResponse.next().cookies.delete('auth.user');
      apiHandler(route, method, body);
    } else {
      NextResponse.next().cookies.delete('visitor.token');
      NextResponse.next().cookies.delete('data');
      await checkAuth(NextResponse.next());
    }
  }

  if (resData.status_message === STATUS_MESSAGES.CITY_REQUIRED) {
    return redirect(webRoutes.addresses);
  }

  return method == 'GET' && onlyResults === true ? resData.results : resData;
};

export default apiHandler;
