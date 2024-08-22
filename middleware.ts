import { LANGUAGES } from "@/lib/enums";
import webRoutes from "@/lib/utils/webRoutes";
import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import apiHandler from "@/lib/utils/apiHandler";

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

  const city = request.cookies.get("city");
  const isLoggedIn =
    request.cookies.get("isLoggedIn")?.value &&
    request.cookies.get("isLoggedIn")?.value == "true";

  if (!token) {
    // if (isRoute(url, webRoutes.home)) {
    console.log("nottoken1");
    return checkAuth(response);
    // console.log("res && res?.ok=====>>>>>>>", res);
    // // if (res && res?.ok) {
    //  return NextResponse.redirect(new URL("/ar" + webRoutes.home, request.url));
    //   // return res;
    // } else {
    //   console.log("res && res?.ok not ok");
    //   return NextResponse.redirect(
    //     new URL("/ar" + webRoutes.home, request.url)
    //   );
    // }
    // } else {
    //   console.log("nottoken2");
    //   return NextResponse.redirect(
    //     new URL("/en" + webRoutes.home, request.url)
    //   );
    //}
  }
  //  else {
  //   console.log("istoken");
  //   if (
  //     !isRoute(url, webRoutes.splash) &&
  //     !isRoute(url, webRoutes.register) &&
  //     !isRoute(url, webRoutes.login) &&
  //     !isRoute(url, webRoutes.newPassword) &&
  //     !isRoute(url, webRoutes.resetPassword) &&
  //     !isRoute(url, webRoutes.valiadateOtp) &&
  //     !isLoggedIn &&
  //     !city
  //   ) {
  //     return NextResponse.redirect(new URL(webRoutes.splash, request.url));
  //   }
  //   console.log("City", city);
  //   if (isRoute(url, webRoutes.splash) && city && city.value) {
  //     console.log("City inside if", city);
  //     return NextResponse.redirect(
  //       new URL("/en" + webRoutes.home, request.url)
  //     );
  //   }
  // }

  const urlToRedirect = authMiddleware(request, url);
  if (urlToRedirect) {
    return NextResponse.redirect(urlToRedirect);
  }

  const pathname = request.nextUrl.pathname;
  let choosenLocale = pathname.split("/")[0];
  if (choosenLocale !== LANGUAGES.ENGLISH && choosenLocale !== LANGUAGES.ARABIC)
    choosenLocale = process.env.DEFAULT_LOCALE_CODE || LANGUAGES.ARABIC;

  const language = request.cookies.get("language")?.value || choosenLocale;
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
    webRoutes.resetPassword,
    webRoutes.newPassword,
    webRoutes.valiadateOtp,
    // webRoutes.home,
  ];

  const isLoggedIn = request.cookies.get("isLoggedIn")?.value == "true";

  if (shouldNotBeAuth.includes(url) && isLoggedIn) {
    return new URL(webRoutes.home, request.url);
  }

  if (shouldBeAuth.includes(url) && !isLoggedIn) {
    return new URL(webRoutes.login, request.url);
  }

  return null;
};

const checkAuth = async (response: NextResponse) => {
  try {
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
        response.cookies.set("language", LANGUAGES.ARABIC);

        // const updateCityResponse = await apiHandler(
        //   "/profile/updatecity",
        //   "PUT",
        //   {
        //     city_id: "5d6a43d2fb419e4001ca3891",
        //   },
        //   true,
        //   false,
        //   resData.results.token
        // );
      }

      return response;
    }
  } catch (error) {
    console.error("check auth error----", error);
    return response;
  }
};

const isRoute = (url: string, route: string) => {
  return url === route || url === "/en" + route || url === "/ar" + route;
};
