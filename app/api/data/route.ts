import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const data = cookieStore.get('data')?.value;
  return NextResponse.json(data ? JSON.parse(data) : {});
}

export async function PUT(request: Request) {
  const cookieStore = cookies();
  const dataCookie = cookieStore.get('data')?.value;
  const data = dataCookie ? JSON.parse(dataCookie) : {};
  const body = request.json();
  const response = NextResponse.json({ ...data, ...body });
  response.cookies.set('data', { ...data, ...body });
  return response;
}
