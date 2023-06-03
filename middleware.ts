import { authMiddleware, checkAuth } from '@/lib/utils/serverHelpers';
import webRoutes from '@/lib/utils/webRoutes';
import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const url = request.nextUrl.pathname;
  if (
    url.startsWith('/_next/static/') ||
    url.startsWith('/static/') ||
    url.startsWith('/assets')
  ) {
    return response;
  }
  const token =
    request.cookies.get('auth.token')?.value ||
    request.cookies.get('visitor.token')?.value ||
    null;

  if (
    !process.env.API_BASE_URL ||
    !process.env.API_APP_KEY ||
    !process.env.API_APP_SECRET
  )
    throw new Error('Missing environment variables');

  if (!token) {
    return checkAuth(response);
  }

  const urlToRedirect = authMiddleware(request, url);
  if (urlToRedirect) {
    return NextResponse.redirect(urlToRedirect);
  }

  return response;
}
