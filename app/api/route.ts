import { IAddress } from '@/(profile)/types';
import { ICity } from '@/city/types';
import apiHandler from '@/lib//utils/apiHandler';
import { LANGUAGES } from '@/lib/enums';
import { setCookie } from 'cookies-next';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import { URL } from 'url';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get('route') || '';

  const response = await apiHandler(route, 'GET', undefined, false);

  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get('route') || '';
  const body = await request.json();

  const response = await apiHandler(route, 'POST', body);

  const nextResponse = NextResponse.json(response);

  if (route == '/profile/register' && response.success == true) {
    const loginResponse = await apiHandler('/profile/login', 'POST', body);
    if (loginResponse.success == true) {
      nextResponse.cookies.set('auth.token', response.results.token);
      nextResponse.cookies.set(
        'auth.user',
        JSON.stringify(response.results.user)
      );
      const updateCityResponse = await apiHandler(
        '/profile/updatecity',
        'PUT',
        { city_id: response.results.user.address.city_id }
      );
      setCookiesData(
        nextResponse,
        response.results.user.language || 'en',
        'kw',
        updateCityResponse.results.data.city,
        {
          ...response.results.user.address,
          id: 'primary',
        }
      );
    }
  }

  if (route == '/profile/login' && response.success == true) {
    nextResponse.cookies.set('auth.token', response.results.token);
    nextResponse.cookies.set(
      'auth.user',
      JSON.stringify(response.results.user)
    );
    const updateCityResponse = await apiHandler('/profile/updatecity', 'PUT', {
      city_id: response.results.user.address.city_id,
    });

    setCookiesData(
      nextResponse,
      response.results.user.language || 'en',
      'kw',
      updateCityResponse.results.data.city,
      {
        ...response.results.user.address,
        id: 'primary',
      }
    );
  }

  return nextResponse;
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get('route') || '';
  const body = await request.json();

  const response = await apiHandler(route, 'PUT', body);

  const nextResponse = NextResponse.json(response);

  return nextResponse;
}

const setCookiesData = (
  nextResponse: NextResponse,
  language: LANGUAGES,
  currency: string,
  city: ICity,
  selectedAddress: IAddress
) => {
  nextResponse.cookies.set('language', language);
  nextResponse.cookies.set('currency', currency);
  nextResponse.cookies.set('city', JSON.stringify(city));
  nextResponse.cookies.set(
    'selectedAddress',
    JSON.stringify(selectedAddress)
  );
  nextResponse.cookies.set('isLoggedIn', 'true');

  return nextResponse;
};
