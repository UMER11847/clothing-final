import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow access to the password page, verification API, Next.js internals, and common static assets
  if (
    pathname === '/password' ||
    pathname.startsWith('/api/auth/verify') ||
    pathname.startsWith('/api/auth/status') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/icon') ||
    pathname.startsWith('/apple-touch-icon') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg') ||
    pathname.endsWith('.gif') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.webp') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.txt') ||
    pathname.endsWith('.xml') ||
    pathname.endsWith('.json')
  ) {
    return NextResponse.next()
  }

  const authCookie = request.cookies.get('site_auth')
  if (authCookie?.value === '1') {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/password'
  url.searchParams.set('returnTo', pathname || '/')
  return NextResponse.redirect(url)
}

export const config = {
  // Match all paths except Next.js internals, the password page, the verify API and static assets
  matcher: [
    '/((?!_next|password|api/auth/verify|api/auth/status|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|txt|xml|json)).*)',
  ],
}


