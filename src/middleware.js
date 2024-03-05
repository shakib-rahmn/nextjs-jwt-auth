import {
  NextResponse
} from "next/server";

export async function middleware(req, res) {
  let verify = req.cookies.get('token');
  let url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect(new URL('/login', url))
  }
}

export const config = {
  matcher: [
    '/api/profile',
    '/profile'
  ]
}