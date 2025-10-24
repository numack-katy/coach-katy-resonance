import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // Optional: Add additional middleware logic here
    return null
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
