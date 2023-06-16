import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const data = request.cookies.getAll();

  const response = NextResponse.json({ success: true, data });

  return response;
}

export async function PUT(request: NextRequest) {
  const body = await request.json();

  const response = NextResponse.json({ success: true });

  if (body.key && body.value) {
    response.cookies.set(body.key, body.value);
  }

  return response;
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key') || '';

  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: key,
    value: '',
    expires: new Date('2016-10-05'),
  });

  return response;
}
