import "server-only";

import { LANGUAGES, STATUS_MESSAGES } from "@/lib/enums";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import webRoutes from "./webRoutes";
import { IResponse } from "../types";
import { NextResponse } from "next/server";

const apiHandler = async (
  route: string,
  method: string = "GET",
  body?: object | null | undefined,
  onlyResults = true,
  cache = true,
  defaultToken?: string | null
) => {
  try {
    const cookieStore = cookies();
    const visitor_token = cookieStore.get("visitor.token")?.value || null;
    const user_token = cookieStore.get("auth.token")?.value || null;
    const isVIP = cookieStore.get("isVIP")?.value || null;

    let token = user_token && user_token != "null" ? user_token : visitor_token;
    console.log("route", route);
    console.log("token", token);
    if (!token) {
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
        console.log();
        if (resData.success && resData.results && resData.results.token) {
          token = resData.results.token;
        }
      }
    }
    const language = cookieStore.get("language")?.value;
    const options: RequestInit = {
      method,
      headers: {
        Authorization: "Bearer " + (defaultToken ? defaultToken : token),
        Language:
          language || process.env.DEFAULT_LOCALE_CODE || LANGUAGES.ENGLISH,
        "Content-Type": "application/json",
      },
      body: body && typeof body == "object" ? JSON.stringify(body) : undefined,
      // cache: cache === true ? "default" : "no-store",
      next: { revalidate: cache === true ? 90 : 0 },
    };

    let url = process.env.API_BASE_URL + route;

    if (isVIP && isVIP != null) {
      if (url.includes("?")) url += `&`;
      else url += "?";

      url += "isVIP=" + isVIP;
    }

    const res = await fetch(url, options);
    const resData: IResponse<any, any> = await res.json();
    console.log("ress----->", resData);
    console.log("token----->", token);

    if (resData.status_message === STATUS_MESSAGES.INVALID_APP_AUTHENTICATION) {
      return NextResponse.redirect(
        new URL(webRoutes.splash, process.env.SITE_URL)
      );
      // redirect(webRoutes.splash);
      // TODO: delete cache
      //return redirect(webRoutes.splash);
    }

    if (resData.status_message === STATUS_MESSAGES.CITY_REQUIRED) {
      console.log("city requuired!");
      // return NextResponse.redirect(
      //   new URL(webRoutes.addresses, process.env.SITE_URL)
      // );
      redirect(webRoutes.splash);
    }

    return method == "GET" && onlyResults === true ? resData.results : resData;
  } catch (err) {
    console.log("ERR==================>: ", err);
  }
};

export default apiHandler;
