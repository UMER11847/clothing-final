import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // Cookies are not directly available in edge runtime Request, so use headers
  const cookieHeader = (request.headers.get('cookie') || '').split(/;\s*/)
  const cookies: Record<string, string> = {}
  for (const part of cookieHeader) {
    const [k, v] = part.split('=')
    if (k) cookies[k] = decodeURIComponent(v || '')
  }
  const authenticated = cookies['site_auth'] === '1'
  return NextResponse.json({ authenticated })
}


