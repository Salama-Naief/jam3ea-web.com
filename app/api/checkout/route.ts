import { STATUS_MESSAGES } from "@/lib/enums";
import { IResponse } from "@/lib/types";
import apiHandler from "@/lib/utils/apiHandler";
import CyberSource from "@/lib/utils/cybersource";
import Knet from "@/lib/utils/knet";
import { IGetCheckoutResponseResult } from "@/module/(main)/cart/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  /* const body: any = await request.json();
  const valid = await apiHandler('/checkout?validation=only', 'POST', body);

  if (!valid.success) {
    return NextResponse.json(valid);
  } */
  //const cart: IGetCheckoutResponseResult = await apiHandler('/checkout');
  const visa = new CyberSource();
  visa.amount = 3;
  visa.referenceId = "44anything5ds2dsdqdf";
  let userData: any = {
    fullname: "Osamas ddev4",
    mobile: "061130045222",
    email: "osama@test5.com",
  };
  /* if (request.cookies.get('isLoggedIn')?.value == 'true' &&
    request.cookies.get('auth.user')?.value
  ) {
    const user = JSON.parse(request.cookies.get('auth.user')?.value as any);

    userData = {
      fullname: user?.fullname,
      mobile: user?.mobile,
      email: user?.email,
    };
  } else {
    userData = {
      fullname: body.user_data.fullname,
      mobile: body.user_data.mobile,
      email: body.user_data.email,
    };
  } */
  const splittedFullName = userData.fullname.split(" ");
  const firstName =
    splittedFullName.length > 1 ? splittedFullName[0] : userData.fullname;
  const lastName =
    splittedFullName.length > 1 ? splittedFullName[1] : userData.fullname;
  visa.setBillingData({
    billing_forename: firstName,
    billing_surename: lastName,
    billing_email: userData.email,
    billing_phone: userData.mobile,
    billing_adress_line1: "Kuwait",
    billing_address_line2: "Kuwait city",
    billing_city: "Kuwait",
    billing_state: "Kuwait",
    billing_country: "KW",
    billing_postalcode: "12344",
    bill_trans_ref_no: "44anything5ds2dsdqdf",
  });

  visa.preparePayload();

  const response: IResponse<CyberSource> = {
    errors: null,
    results: visa,
    status_code: 200,
    status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
    success: true,
  };
  const jsonResponse = NextResponse.json(response);
  //jsonResponse.cookies.set('checkout', JSON.stringify(body));
  return jsonResponse;
}

export async function POST(request: NextRequest) {
  const body: any = await request.json();
  const valid = await apiHandler("/checkout?validation=only", "POST", body);

  if (!valid.success) {
    return NextResponse.json(valid);
  }

  if (body.payment_method === "cod") {
    const url = `/checkout?payment_method=cod&hash=${valid.results.hash}`;
    const response: IResponse<{ url: string }> = {
      errors: null,
      results: { url },
      status_code: 200,
      status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
      success: true,
    };
    const jsonResponse = NextResponse.json(response);
    jsonResponse.cookies.set("checkout", JSON.stringify(body));
    return jsonResponse;
  }

  if (body.payment_method === "knet") {
    const lang = request.cookies.get("language")?.value;
    const user = request.cookies.get("auth.user")?.value;
    const knet = new Knet(lang);
    const url = await knet.pay(valid.results.hash, user as any);
    const response: IResponse<{ url: string }> = {
      errors: null,
      results: { url },
      status_code: 200,
      status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
      success: true,
    };
    const jsonResponse = NextResponse.json(response);
    jsonResponse.cookies.set("checkout", JSON.stringify(body));
    return jsonResponse;
  }

  /* let userData: any = {};

  if (
    request.cookies.get('isLoggedIn')?.value == 'true' &&
    request.cookies.get('auth.user')?.value
  ) {
    const user = JSON.parse(request.cookies.get('auth.user')?.value as any);

    userData = {
      fullname: user?.fullname,
      mobile: user?.mobile,
      email: user?.email,
    };
  } else {
    userData = {
      fullname: body.user_data.fullname,
      mobile: body.user_data.mobile,
      email: body.user_data.email,
    };
  }

  if (body.payment_method === 'visa') {
    const cart: IGetCheckoutResponseResult = await apiHandler('/checkout');
    

    const response: IResponse<{ url: string }> = {
      errors: null,
      results: { url: '' },
      status_code: 200,
      status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
      success: true,
    };
    const jsonResponse = NextResponse.json(response);
    jsonResponse.cookies.set('checkout', JSON.stringify(body));
    return jsonResponse;
  } */
}
