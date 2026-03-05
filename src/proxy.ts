import { auth } from "@/lib/auth";
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isLoginPage = req.nextUrl.pathname.startsWith("/login");

  if (!isLoggedIn && !isLoginPage) {
    return Response.redirect(new URL("/login", req.url));
  }

  if (isLoggedIn && isLoginPage) {
    return Response.redirect(new URL("/", req.url));
  }

  return undefined;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
