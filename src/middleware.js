import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from "next-auth/middleware"


export async function middleware(request) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  if (token && url.pathname.startsWith('/admin') && !url.pathname.startsWith('/admin/dashboard')) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin',
    '/admin/:path*'
  ],
};

