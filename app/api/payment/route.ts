import CyberSource from '@/lib/utils/cybersource';
import Knet from '@/lib/utils/knet';
import webRoutes from '@/lib/utils/webRoutes';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import querystring from 'querystring';

export async function GET(request: NextRequest) {
  console.log('GET request');
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const jsonBody = querystring.parse(body);
  return NextResponse.json(jsonBody);
  console.log(jsonBody);

  if (jsonBody.decision) {
    const url = await CyberSource.handleResult(jsonBody);
    return redirect(url);
  }

  const knet = new Knet();
  const url = knet.result(jsonBody);
  return redirect(url || process.env.SITE_URL + webRoutes.cart);
}
