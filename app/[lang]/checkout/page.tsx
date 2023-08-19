import Container from '@/components/Container';
import { STATUS_MESSAGES } from '@/lib/enums';
import { IResponse } from '@/lib/types';
import apiHandler from '@/lib/utils/apiHandler';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import ThankYou from './components/ThankYou';
import { getDictionary } from '@/lib/utils/dictionary';
import CheckoutError from './components/CheckoutError';
import { redirect } from 'next/navigation';
import webRoutes from '@/lib/utils/webRoutes';

const checkout = async (searchParams: any) => {
  const cookiesData: any = cookies().get('checkout')?.value || '{}';
  const checkoutData = JSON.parse(cookiesData);

  if (
    (searchParams['result'] && searchParams['result'] == 'CAPTURED') ||
    (searchParams['payment_method'] == 'cod' && searchParams['hash'])
  ) {
    const paymentDetails =
      searchParams['result'] && searchParams['result'] == 'CAPTURED'
        ? {
            paymentid: searchParams['paymentid'],
            trackid: searchParams['trackid'],
            tranid: searchParams['tranid'],
            auth: searchParams['auth'],
            ref: searchParams['ref'],
            amt: searchParams['amt'],
            result: searchParams['result'],
            udf1: searchParams['udf1'],
            udf2: searchParams['udf2'],
            udf3: searchParams['udf3'],
            udf4: searchParams['udf4'],
            udf5: searchParams['udf5'],
            postdate: searchParams['postdate'],
            avr: searchParams['avr'],
            authRespCode: searchParams['authRespCode'],
          }
        : null;

    const hash =
      searchParams['payment_method'] == 'cod'
        ? searchParams['hash']
        : paymentDetails?.trackid;

    const body = {
      payment_details: paymentDetails,
      payment_method: searchParams['payment_method'] == 'cod' ? 'cod' : 'knet',
      discount_by_wallet: checkoutData['discount_by_wallet'],
      delivery_time: checkoutData['delivery_time'],
      notes: checkoutData['notes'],
      suppliers: checkoutData['suppliers'],
      address_id: checkoutData['address_id'],
      user_data: checkoutData['user_data'],
      isVIP: checkoutData['isVIP'],
      hash,
    };

    const isVIP = checkoutData.isVIP ? checkoutData.isVIP : false;

    const checkoutResponse = await apiHandler(
      '/checkout?web=true&isVIP=' + isVIP,
      'POST',
      body,
      false
    );

    console.log(
      '========================================== CHECKOUT RESPONSE ==========================================\n',
      checkoutResponse,
      body
    );

    console.log(
      '========================================================================================================='
    );

    let params = '';
    Object.keys(body).forEach((key) => {
      params += `${key}=${body[key as keyof typeof body]}&`;
    });
    if (checkoutResponse.success) {
      const jsonResponse = NextResponse.json(checkoutResponse);
      jsonResponse.cookies.delete('checkout');
      return jsonResponse;
    } else {
      const jsonResponse = NextResponse.json(checkoutResponse);
      jsonResponse.cookies.delete('checkout');
      return jsonResponse;
    }
  } else {
    const response: IResponse<{ url: string }> = {
      errors: null,
      results: null,
      status_code: 200,
      status_message: STATUS_MESSAGES.RESOURCE_EXISTS,
      success: false,
    };
    const jsonResponse = NextResponse.json(response);
    jsonResponse.cookies.delete('checkout');
    return jsonResponse;
  }
};

export default async function Checkout({ params, searchParams }: any) {
  const checkoutResponse: any = await (await checkout(searchParams)).json();

  if (!checkoutResponse || !checkoutResponse.success) {
    return redirect(webRoutes.cart);
  }

  return (
    <div>
      <Container>
        {checkoutResponse.success ? (
          <>
            {/* @ts-expect-error Server Component */}
            <ThankYou
              lang={params.lang}
              user_data={checkoutResponse.results.user_data}
              orderId={checkoutResponse.results._id}
            />
          </>
        ) : (
          <>
            {/* @ts-expect-error Server Component */}
            <CheckoutError lang={params.lang} />
          </>
        )}
      </Container>
    </div>
  );
}
