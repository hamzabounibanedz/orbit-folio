import { NextResponse } from "next/server";

export function middleware() {
  // Let Next.js serve this deployment's profiles, documentation, and assets.
  return NextResponse.next();
}

export const config = { matcher: "/" };
