import { IAddress } from "@/module/(main)/(profile)/types";
import { ICity } from "@/module/(main)/city/types";
import apiHandler from "@/lib//utils/apiHandler";
import { LANGUAGES } from "@/lib/enums";
import { NextResponse } from "next/server";
import { URL } from "url";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get("route") || "";

  const response = await apiHandler(route, "GET", undefined, false, false);

  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const route = searchParams.get("route") || "";
  const cookieStore = cookies();
  const city = cookieStore.get("city")?.value || null;
  const visitorToken = cookieStore.get("visitor.token")?.value || null;
  const body = !searchParams.get("nobody") ? await request.json() : undefined;
  const response = await apiHandler(route, "POST", body);
  console.log("city from login", city && JSON.parse(city)._id);
  const nextResponse = NextResponse.json(response);

  if (route == "/profile/register" && response.success == true) {
    const loginResponse = await apiHandler("/profile/login", "POST", body);
    if (loginResponse.success == true) {
      nextResponse.cookies.set("auth.token", loginResponse.results.token);
      nextResponse.cookies.set(
        "auth.user",
        JSON.stringify(loginResponse.results.user)
      );
      await clearCartExceptJmaie(
        city,
        response.loginResponse.results.user.address.city_id,
        loginResponse.results.token
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
    console.log("loged user token", response.results.token);
    console.log("visitor token", visitorToken);
    // if (
    //   city &&
    //   JSON.parse(city)._id !== response.results.user.address.city_id
    // ) {
    //   const getCart = await apiHandler(
    //     "/cart/all",
    //     // "GET",
    //     // undefined,
    //     // true,
    //     // false,
    //     // response.results.token
    //   );

    //   console.log("getCart fom login", getCart);
    //   const findSupplierExeptJamiea = getCart.filter(
    //     (c: any) => c._id !== "Jm3eia"
    //   );
    //   console.log("findSupplierExeptJamiea fom login", findSupplierExeptJamiea);
    //   if (findSupplierExeptJamiea.length > 0)
    //     Promise.all(
    //       findSupplierExeptJamiea.map(async (cart: any) => {
    //         const clearResLoged = await apiHandler(
    //           `/cart/clear?supplier_id=${cart._id}`,
    //           "POST",
    //           undefined,
    //           true,
    //           false,
    //           response.results.token
    //         );
    //         console.log("clearRes clearResLoged=======>>>>>>>>", clearResLoged);
    //       })
    //     );
    // }
    //clear all carts except jmaie
    await clearCartExceptJmaie(
      city,
      response.results.user.address.city_id,
      response.results.token
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

    return setCookiesData(
      nextResponse,
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
  const cookieStore = cookies();
  const city = cookieStore.get("city")?.value || null;
  const visitorToken = cookieStore.get("visitor.token")?.value || null;
  const userToken = cookieStore.get("auth.token")?.value || null;
  const token = userToken ? userToken : visitorToken;

  const response = await apiHandler(route, "PUT", body);

  const nextResponse = NextResponse.json(response);
  console.log("PUT response", response);
  if (route === "/profile/updatecity") {
    if (response.success) {
      nextResponse.cookies.set(
        "city",
        JSON.stringify({
          _id: response.results.data.city._id,
          name: response.results.data.city.name,
          store_id: response.results.data.city.store_id,
          parent_id: response.results.data.city.parent_id,
        })
      );
    }
    console.log("nextResponse", response.results.data.city);
  }

  if (route === "/profile/update" && response.success) {
    if (body && body.address && body.address.city_id)
      await clearCartExceptJmaie(city, body.address.city_id, token as string);
  }
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
  currency: string,
  city: ICity,
  selectedAddress: IAddress
) => {
  const cookieStore = cookies();
  const language = cookieStore.get("language")?.value || null;
  nextResponse.cookies.set("language", language || "ar");
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

const clearCartExceptJmaie = async (
  city: string | null,
  userCityId: string,
  token: string
) => {
  if (userCityId !== "5d6a43d2fb419e4001ca3891") {
    const getCart = await apiHandler(
      "/cart/all"
      // "GET",
      // undefined,
      // true,
      // false,
      // response.results.token
    );

    console.log("getCart fom login", getCart);
    const findSupplierExeptJamiea = getCart.filter(
      (c: any) => c._id !== "Jm3eia"
    );
    console.log("findSupplierExeptJamiea fom login", findSupplierExeptJamiea);
    if (findSupplierExeptJamiea.length > 0)
      Promise.all(
        findSupplierExeptJamiea.map(async (cart: any) => {
          const clearResLoged = await apiHandler(
            `/cart/clear?supplier_id=${cart._id}`,
            "POST",
            undefined,
            true,
            false,
            token
          );
          console.log("clearRes clearResLoged=======>>>>>>>>", clearResLoged);
        })
      );
  }
};
