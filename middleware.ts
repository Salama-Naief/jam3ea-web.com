//import { authMiddleware, checkAuth } from '@/lib/utils/serverHelpers';
import webRoutes from '@/lib/utils/webRoutes';
import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './i18n-config';
import { LANGUAGES } from '@/lib/enums';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const url = request.nextUrl.pathname
    .replace('/' + LANGUAGES.ENGLISH, '')
    .replace('/' + LANGUAGES.ARABIC, '');

  if (
    url.startsWith('/_next/static/') ||
    url.startsWith('/static/') ||
    url.startsWith('/assets') ||
    url === '/api'
  ) {
    return response;
  }

  const token =
    request.cookies.get('auth.token')?.value &&
    request.cookies.get('auth.token')?.value != 'null'
      ? request.cookies.get('auth.token')?.value
      : request.cookies.get('visitor.token')?.value;

  if (
    !process.env.API_BASE_URL ||
    !process.env.API_APP_KEY ||
    !process.env.API_APP_SECRET
  )
    throw new Error('Missing environment variables');

  const addresses = request.cookies.get('addresses')?.value;

  if (!token) {
    if (webRoutes.splash === url || '/en' + webRoutes.splash === url) {
      return checkAuth(response);
    } else {
      return NextResponse.redirect(
        new URL('/en' + webRoutes.splash, request.url)
      );
    }
  } else {
    if (webRoutes.splash === url && addresses && addresses.length > 0) {
      return NextResponse.redirect(new URL(webRoutes.home, request.url));
    }
  }

  const urlToRedirect = authMiddleware(request, url);
  if (urlToRedirect) {
    return NextResponse.redirect(urlToRedirect);
  }

  const pathname = request.nextUrl.pathname;

  const language =
    request.cookies.get('language')?.value ||
    process.env.DEFAULT_LOCALE_CODE ||
    LANGUAGES.ENGLISH;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (!pathname.startsWith(`/${language}/`) && pathname !== `/${language}`) {
    if (!pathnameIsMissingLocale) {
      return NextResponse.redirect(new URL(`/${language}`, request.url));
    } else {
      return NextResponse.redirect(
        new URL(
          `/${language}/${pathname}${request.nextUrl.search}`,
          request.url
        )
      );
    }
  }

  return response;
}

const authMiddleware = (request: NextRequest, url: string): URL | null => {
  const shouldBeAuth = [webRoutes.profile];
  const shouldNotBeAuth = [
    webRoutes.login,
    webRoutes.register,
    webRoutes.splash,
    webRoutes.addresses,
  ];

  /* const isLoggedIn = request.cookies.get('isLoggedIn')?.value == 'true';
  const selectedAddress = request.cookies.get('selectedAddress')?.value;
  const addresses = request.cookies.get('addresses')?.value;

  if (shouldNotBeAuth.includes(url) && isLoggedIn) {
    return new URL(webRoutes.home, request.url);
  }

  if (shouldBeAuth.includes(url) && !isLoggedIn) {
    return new URL(webRoutes.login, request.url);
  }

  if (!selectedAddress && !isLoggedIn && !shouldNotBeAuth.includes(url)) {
    if (addresses && addresses.length > 0)
      return new URL(webRoutes.addresses, request.url);
    else return new URL(webRoutes.splash, request.url);
  } */

  return null;
};

const checkAuth = async (response: NextResponse) => {
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
