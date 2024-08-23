import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { routes } from "@/constants/routes";

const protectedRoutes = [routes.PROFILE];
const authorizationRoutes = [routes.LOGIN, routes.SIGN_UP];
const publicRoutes = [routes.PRODUCTS, routes.HOME];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isAuthorizationRoute = authorizationRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const user = cookies().get("USER")?.value;

  if (isProtectedRoute && !user) {
    return NextResponse.redirect(new URL(routes.LOGIN, req.nextUrl));
  }

  if (isAuthorizationRoute && user) {
    return NextResponse.redirect(new URL(routes.HOME, req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"]
};
