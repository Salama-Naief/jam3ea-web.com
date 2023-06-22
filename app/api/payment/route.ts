import Knet from '@/lib/utils/knet';
import webRoutes from '@/lib/utils/webRoutes';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('GET request');
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const knet = new Knet();
  const url = knet.result(body);
  console.log('URL: ', url);
  return redirect(url || process.env.SITE_URL + webRoutes.cart);
}
