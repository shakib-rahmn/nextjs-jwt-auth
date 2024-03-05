import { createToken } from "@/utils/jwtUtils";
import {
  NextResponse
} from "next/server";

export async function POST(req) {
  try {
    let data = await req.json();
    let user = data['username'];
    let pass = data['password'];

    if (user === "johndoe" && pass === "12345") {
      const token = await createToken(user, pass);
      const expireDuration = new Date(Date.now() + 24*60*60*1000 );
      const cookieString = `token=${token}; expires=${expireDuration}; path=/`;

      console.log(user, pass)

      return NextResponse.json({
        user: user,
        status: "success",
        msg: "Login success",
      },
      {headers: {"set-cookie": cookieString}}
      );
    } else {
      return NextResponse.json({
        status: "failed",
        msg: "Login Failed"
      }, {
        status: 401
      })
    }
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      data: error
    });
  }
}

export async function GET(req,res) {
  let expireDuration = new Date(Date.now() - 24*60*60*1000 );
  const response = NextResponse.redirect(new URL('/', req.url), 303);
  response.cookies.set('token', '', { expires: expireDuration });
  return response;
}