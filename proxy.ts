import {NextRequest, NextResponse} from "next/server";

const publicPath: Record<string, boolean> = {
  "/login": true,
};

export function proxy(req: NextRequest) {
  const cookie = req.cookies;
  const {pathname} = req.nextUrl;

  // tokens
  const at = cookie.get("access_token")?.value;
  const rt = cookie.get("refresh_token")?.value;

  if (at && publicPath[pathname]) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!at && !publicPath[pathname]) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
