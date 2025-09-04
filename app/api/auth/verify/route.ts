import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({})) as { password?: string }
  const provided = body?.password || ''
  const expected = process.env.SITE_PASSWORD || ''

  if (!expected) {
    return NextResponse.json(
      { message: 'Server password not configured' },
      { status: 500 }
    )
  }

  if (provided !== expected) {
    return NextResponse.json({ message: 'Invalid password' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  // Short-lived cookie (e.g., 7 days). Adjust as needed.
  res.cookies.set('site_auth', '1', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return res
}


