import { NextRequest, NextResponse } from "next/server";
import { getInitialLocale, isLocale } from "./app/lib/locale";

const localeCookie = "fx-locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const savedLocale = request.cookies.get(localeCookie)?.value;

  if (pathname === "/") {
    const locale = getInitialLocale(
      savedLocale,
      request.headers.get("accept-language"),
    );
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    const response = NextResponse.redirect(url);
    response.cookies.set(localeCookie, locale, { maxAge: 31536000, path: "/" });
    return response;
  }

  const locale = pathname.split("/")[1];
  if (locale && isLocale(locale) && !savedLocale) {
    const response = NextResponse.next();
    response.cookies.set(localeCookie, locale, { maxAge: 31536000, path: "/" });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};