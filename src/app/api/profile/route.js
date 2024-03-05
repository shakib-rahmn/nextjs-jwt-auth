import { verifyToken } from "@/utils/jwtUtils";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const token = req.cookies.get('token');
    const user = await verifyToken(token['value']);
    return NextResponse.json({ message: "GET request from profile", data: user['user']})
  } catch (error) {
    return NextResponse.json({ error: error})
  }
}