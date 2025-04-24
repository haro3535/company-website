import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow styles, fonts, images, and public files
  // if (pathname.startsWith("/_next/") || pathname.startsWith("/public/")) {
  //   return NextResponse.next();
  // }

  // // Redirect all other pages to Under Construction
  // if (pathname !== "/under-construction") {
  //   return NextResponse.redirect(new URL("/under-construction", req.url));
  // }

  if (pathname === "/graid") {
    // Allow access to the Graid dashboard and its subpages
    return NextResponse.redirect(new URL("/graid/dashboard", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
