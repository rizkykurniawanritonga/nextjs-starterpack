import { withAuth } from "next-auth/middleware";
export const config = {
  matcher: ["/dashboard/:path*"],
};

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const tkn = req.nextauth.token;
    const curl = req.nextUrl.pathname;
  }
);
