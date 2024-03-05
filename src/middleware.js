import {
  NextResponse
} from "next/server";

export async function middleware(req) {
  let verify = req.cookies.get('token');
  let url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.json({
      msg: "user not logged in"
    }, {status: 401});
  }
}

export const config = {
  matcher: [
    '/api/profile'
  ]
}