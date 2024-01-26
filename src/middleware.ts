// locale-redirect-middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // Check if the locale is 'ge' and if we're not already on the 'ka' path
  if (pathname.startsWith('/ge')) {
    // Replace 'ge' with 'ka' in the URL pathname
    const redirectedPathname = pathname.replace('/ge', '/ka');
    // Create a new URL with the 'ka' locale
    const url = req.nextUrl.clone();
    url.pathname = redirectedPathname;
    url.locale = 'ka';

    // Return a response with a redirect to the new URL
    return NextResponse.redirect(url);
  }

  // If locale is not 'ge', or we're already on the 'ka' path, continue with the request
  return NextResponse.next();
}