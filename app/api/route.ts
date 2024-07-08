import { IAddress } from "@/module/(main)/(profile)/types";
import { ICity } from "@/module/(main)/city/types";
import apiHandler from "@/lib//utils/apiHandler";
import { LANGUAGES } from "@/lib/enums";
import { NextResponse } from "next/server";
import { URL } from "url";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get("route") || "";

  const response = await apiHandler(route, "GET", undefined, false, false);

  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get("route") || "";
  const body = !searchParams.get("nobody") ? await request.json() : undefined;
  const response = await apiHandler(route, "POST", body);

  const nextResponse = NextResponse.json(response);

  if (route == "/profile/register" && response.success == true) {
    const loginResponse = await apiHandler("/profile/login", "POST", body);
    if (loginResponse.success == true) {
      nextResponse.cookies.set("auth.token", loginResponse.results.token);
      nextResponse.cookies.set(
        "auth.user",
        JSON.stringify(loginResponse.results.user)
      );
      const updateCityResponse = await apiHandler(
        "/profile/updatecity",
        "PUT",
        {
          city_id: loginResponse.results.user.address.city_id,
        },
        true,
        false,
        loginResponse.results.token
      );

      return setCookiesData(
        nextResponse,
        loginResponse.results.user.language || "en",
        "kw",
        updateCityResponse.results.data.city,
        {
          ...loginResponse.results.user.address,
          id: "primary",
        }
      );
    }
  }

  if (route == "/profile/login" && response.success == true) {
    nextResponse.cookies.set("auth.token", response.results.token);
    nextResponse.cookies.set(
      "auth.user",
      JSON.stringify(response.results.user)
    );
    const updateCityResponse = await apiHandler(
      "/profile/updatecity",
      "PUT",
      {
        city_id: response.results.user.address.city_id,
      },
      true,
      false,
      response.results.token
    );

    console.log("UPDATE CITY RESPONSE: ", updateCityResponse);

    return setCookiesData(
      nextResponse,
      response.results.user.language || "en",
      "kw",
      updateCityResponse.results.data.city,
      {
        ...response.results.user.address,
        id: "primary",
      }
    );
  }

  return nextResponse;
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get("route") || "";
  const body = await request.json();
  console.log("update city route", route);
  console.log("update city body", body);

  const response = await apiHandler(route, "PUT", body);

  const nextResponse = NextResponse.json(response);

  return nextResponse;
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get("route") || "";

  const response = await apiHandler(route, "DELETE");

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
  nextResponse.cookies.set("language", language);
  nextResponse.cookies.set("currency", currency);
  nextResponse.cookies.set(
    "city",
    JSON.stringify({
      _id: city._id,
      name: city.name,
      store_id: city.store_id,
      parent_id: city.parent_id,
    })
  );
  nextResponse.cookies.set("selectedAddress", JSON.stringify(selectedAddress));
  nextResponse.cookies.set("isLoggedIn", "true");

  return nextResponse;
};
