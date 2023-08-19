import { STATUS_MESSAGES } from '@/lib/enums';
import { IResponse } from '@/lib/types';
import apiHandler from '@/lib/utils/apiHandler';
import Knet from '@/lib/utils/knet';
import { IGetCheckoutResponseResult } from '@/module/cart/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const checkoutData: any = request.cookies.get('checkout')?.value || {};
  const { searchParams } = new URL(request.url);

  if (
    (searchParams.get('result') && searchParams.get('result') == 'CAPTURED') ||
    (searchParams.get('payment_method') == 'cod' && searchParams.get('hash'))
  ) {
    console.log('first #1');
    const paymentDetails =
      searchParams.get('result') && searchParams.get('result') == 'CAPTURED'
        ? {
            paymentid: searchParams.get('paymentid'),
            trackid: searchParams.get('trackid'),
            tranid: searchParams.get('tranid'),
            auth: searchParams.get('auth'),
            ref: searchParams.get('ref'),
            amt: searchParams.get('amt'),
            result: searchParams.get('result'),
            udf1: searchParams.get('udf1'),
            udf2: searchParams.get('udf2'),
            udf3: searchParams.get('udf3'),
            udf4: searchParams.get('udf4'),
            udf5: searchParams.get('udf5'),
            postdate: searchParams.get('postdate'),
            avr: searchParams.get('avr'),
            authRespCode: searchParams.get('authRespCode'),
          }
        : null;

    const hash =
      searchParams.get('payment_method') == 'cod'
        ? searchParams.get('hash')
        : paymentDetails?.trackid;

    const body = {
      payment_details: paymentDetails,
      payment_method: searchParams.get('payment_method'),
      discount_by_wallet: checkoutData.discount_by_wallet,
      delivery_time: checkoutData.delivery_time,
      notes: checkoutData.notes,
      suppliers: checkoutData.suppliers,
      address_id: checkoutData.address_id,
      user_data: checkoutData.user_data,
      isVIP: checkoutData.isVIP,
      hash,
    };

    const isVIP = checkoutData.isVIP ? checkoutData.isVIP : false;

    const checkoutResponse = await apiHandler(
      '/checkout?isVIP=' + isVIP,
      'POST',
      body,
      false
    );

    console.log('checkoutresponse: ' + checkoutResponse);

    let params = '';
    Object.keys(body).forEach((key) => {
      params += `${key}=${body[key as keyof typeof body]}&`;
    });
    if (checkoutResponse.success) {
      const response: IResponse<{ url: string }> = {
        errors: null,
        results: { url: '/checkout?' + params },
        status_code: 200,
        status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
        success: true,
      };
      const jsonResponse = NextResponse.json(response);
      jsonResponse.cookies.delete('checkout');
      return jsonResponse;
    } else {
      const response: IResponse<{ url: string }> = {
        errors: null,
        results: { url: '/checkout?' + params },
        status_code: 200,
        status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
        success: false,
      };
      const jsonResponse = NextResponse.json(response);
      jsonResponse.cookies.delete('checkout');
      return jsonResponse;
    }
  } else {
    const response: IResponse<{ url: string }> = {
      errors: null,
      results: { url: '/checkout' },
      status_code: 200,
      status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
      success: false,
    };
    const jsonResponse = NextResponse.json(response);
    jsonResponse.cookies.delete('checkout');
    return jsonResponse;
  }
}

export async function POST(request: NextRequest) {
  const body: any = await request.json();
  const valid = await apiHandler('/checkout?validation=only', 'POST', body);

  if (!valid.success) {
    return NextResponse.json(valid);
  }

  if (body.payment_method === 'cod') {
    const url = `/checkout?payment_method=cod&hash=${valid.results.hash}`;
    const response: IResponse<{ url: string }> = {
      errors: null,
      results: { url },
      status_code: 200,
      status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
      success: true,
    };
    const jsonResponse = NextResponse.json(response);
    jsonResponse.cookies.set('checkout', JSON.stringify(body));
    return jsonResponse;
  }

  if (body.payment_method === 'knet') {
    const lang = request.cookies.get('language')?.value;
    const user = request.cookies.get('auth.user')?.value;
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
    jsonResponse.cookies.set('checkout', JSON.stringify(body));
    return jsonResponse;
  }

  if (body.payment_method === 'visa') {
    const cart: IGetCheckoutResponseResult = await apiHandler('/checkout');
    const res = await fetch(
      `https://pay.jm3eia.com/api/v1/payment-requests?amount=${parseFloat(
        cart.total
      )}&full_name=${body.fullname}&mobile_number=${body.mobile}&email=${
        body.email
      }&payment_method=`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'app-key': '9cKkvPW6y9hpes0Q01ikfOkdwmpIc2T6r8OBmOjbapmwKw',
          'app-secret': 'jNmZGUyZTJlpGRRyF35tti0BHkN64WI4AlxNXIxL45gX2i',
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        success: false,
        errors: { message: 'Cannot make the payment' },
      });
    }

    const resData = await res.json();

    const url = resData.redirect_url;
    const data = resData.data;

    console.log(
      '====================== this is the data =====================: ',
      data,
      url,
      resData
    );

    const response: IResponse<{ url: string }> = {
      errors: null,
      results: { url },
      status_code: 200,
      status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
      success: true,
    };
    const jsonResponse = NextResponse.json(response);
    jsonResponse.cookies.set('checkout', JSON.stringify(body));
    return jsonResponse;
  }
}
