//import { authMiddleware, checkAuth } from '@/lib/utils/serverHelpers';
import webRoutes from "@/lib/utils/webRoutes";
import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import { LANGUAGES } from "@/lib/enums";
import { redirect } from "next/navigation";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const url = request.nextUrl.pathname
    .replace("/" + LANGUAGES.ENGLISH, "")
    .replace("/" + LANGUAGES.ARABIC, "");

  if (
    url.startsWith("/_next/static/") ||
    url.startsWith("/static/") ||
    url.startsWith("/assets") ||
    url.startsWith("/favicon.ico") ||
    url.startsWith("/api")
  ) {
    return response;
  }

  const token =
    request.cookies.get("auth.token")?.value &&
    request.cookies.get("auth.token")?.value != "null"
      ? request.cookies.get("auth.token")?.value
      : request.cookies.get("visitor.token")?.value;

  if (
    !process.env.API_BASE_URL ||
    !process.env.API_APP_KEY ||
    !process.env.API_APP_SECRET
  )
    throw new Error("Missing environment variables");

  const addresses = request.cookies.get("addresses")?.value;
  const city = request.cookies.get("city");
  console.log("city===", city);
  const selectedAddress = request.cookies.get("selectedAddress")?.value;
  const isLoggedIn =
    request.cookies.get("isLoggedIn")?.value &&
    request.cookies.get("isLoggedIn")?.value == "true";

  if (!token) {
    if (isRoute(url, webRoutes.splash)) {
      return checkAuth(response);
    } else {
      //console.log('REDIRECTION #1');
      return NextResponse.redirect(
        new URL("/en" + webRoutes.splash, request.url)
      );
    }
  } else {
    // if (isRoute(url, webRoutes.splash) && city) {
    //   //console.log('REDIRECTION #2');
    //   return NextResponse.redirect(new URL(webRoutes.home, request.url));
    //   // return redirect(webRoutes.home);
    // }
    if (isRoute(url, webRoutes.splash) && addresses && addresses.length > 0) {
      //console.log('REDIRECTION #2');
      return NextResponse.redirect(new URL(webRoutes.home, request.url));
      // return redirect(webRoutes.home);
    }

    if (
      /* url != '' && */
      !isRoute(url, webRoutes.splash) &&
      !isRoute(url, webRoutes.addresses) &&
      !isRoute(url, webRoutes.register) &&
      !isRoute(url, webRoutes.login) &&
      !isLoggedIn &&
      (!addresses || addresses?.length < 1)
    ) {
      //console.log('REDIRECTION #3 ', new URL(webRoutes.splash, request.url).toString());
      return NextResponse.redirect(new URL(webRoutes.splash, request.url));
    }

    if (addresses && addresses?.length > 0 && !selectedAddress) {
      //   //console.log('REDIRECTION #4');
      return NextResponse.redirect(new URL(webRoutes.addresses, request.url));
    }
  }

  const urlToRedirect = authMiddleware(request, url);
  if (urlToRedirect) {
    return NextResponse.redirect(urlToRedirect);
  }

  // if (!selectedAddress) {
  //   return NextResponse.redirect(new URL(webRoutes.addresses, request.url));
  // }

  const pathname = request.nextUrl.pathname;

  let choosenLocale = pathname.split("/")[0];
  if (choosenLocale !== LANGUAGES.ENGLISH && choosenLocale !== LANGUAGES.ARABIC)
    choosenLocale = process.env.DEFAULT_LOCALE_CODE || LANGUAGES.ENGLISH;

  const language = request.cookies.get("language")?.value || choosenLocale;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (!pathname.startsWith(`/${language}/`) && pathname !== `/${language}`) {
    if (!pathnameIsMissingLocale) {
      //console.log('REDIRECTION #5');
      return NextResponse.redirect(new URL(`/${language}`, request.url));
    } else {
      //console.log('REDIRECTION #6: ',new URL(`/${language}/${pathname}${request.nextUrl.search}`,request.url).toString());
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

  const isLoggedIn = request.cookies.get("isLoggedIn")?.value == "true";
  const selectedAddress = request.cookies.get("selectedAddress")?.value;
  const addresses = request.cookies.get("addresses")?.value;

  if (shouldNotBeAuth.includes(url) && isLoggedIn) {
    return new URL(webRoutes.home, request.url);
    // redirect(webRoutes.home);
  }

  if (shouldBeAuth.includes(url) && !isLoggedIn) {
    // return new URL(webRoutes.login, request.url);
    redirect(webRoutes.login);
  }

  if (!selectedAddress && !isLoggedIn && !shouldNotBeAuth.includes(url)) {
    if (addresses && addresses.length > 0)
      return new URL(webRoutes.addresses, request.url);
    else return new URL(webRoutes.splash, request.url);
  }

  return null;
};

const checkAuth = async (response: NextResponse) => {
  const res = await fetch(`${process.env.API_BASE_URL}/auth/check`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Language: "en",
    },
    body: JSON.stringify({
      appId: process.env.API_APP_KEY,
      appSecret: process.env.API_APP_SECRET,
    }),
  });

  if (res.ok) {
    const resData = await res.json();
    if (resData.success && resData.results && resData.results.token) {
      response.cookies.set("visitor.token", resData.results.token);
    }

    return response;
  }
};

const isRoute = (url: string, route: string) => {
  return url === route || url === "/en" + route || url === "/ar" + route;
};
