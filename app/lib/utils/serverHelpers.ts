import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import webRoutes from './webRoutes';

export const checkAuth = async (response: NextResponse) => {
  const res = await fetch(`${process.env.API_BASE_URL}/auth/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Language: 'en',
    },
    body: JSON.stringify({
      appId: process.env.API_APP_KEY,
      appSecret: process.env.API_APP_SECRET,
    }),
  });

  if (res.ok) {
    const resData = await res.json();

    if (resData.success && resData.results && resData.results.token) {
      response.cookies.set('visitor.token', resData.results.token);
    }

    return response;
  }
};

export const authMiddleware = (
  request: NextRequest,
  url: string
): URL | null => {
  const shouldBeAuth = [webRoutes.profile];
  const shouldNotBeAuth = [
    webRoutes.login,
    webRoutes.register,
    webRoutes.splash,
  ];
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value == 'true';

  if (shouldNotBeAuth.includes(url) && isLoggedIn) {
    console.log('Should not be logged in');
    return new URL(webRoutes.home, request.url);
  }

  if (shouldBeAuth.includes(url) && !isLoggedIn) {
    console.log('Should be logged in');
    return new URL(webRoutes.login, request.url);
  }

  return null;
};
