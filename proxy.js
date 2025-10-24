import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function proxy(req) {
    // Optional: Add additional proxy logic here
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

// Protect all /portal routes except /portal/login
export const config = {
  matcher: ['/portal/dashboard/:path*', '/portal/sessions/:path*', '/portal/resources/:path*', '/portal/intake/:path*']
}
