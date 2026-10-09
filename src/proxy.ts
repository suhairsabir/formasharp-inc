import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * `/Simulation` and `/simulation` differ only by case. A next.config redirect
 * matches case-insensitively and loops. Compare the raw pathname instead.
 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/Simulation") {
    const url = request.nextUrl.clone();
    url.pathname = "/simulation";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Simulation", "/simulation"],
};
