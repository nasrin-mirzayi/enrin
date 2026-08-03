import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const {
    nationality,
    gender,
    study,
  } = body;


  const allowed =
    nationality === "Afghanistan" &&
    gender === "Woman" &&
    study === "Yes";


  if (!allowed) {
    return NextResponse.json({
      allowed: false,
    });
  }


  const response = NextResponse.json({
    allowed: true,
  });


  response.cookies.set(
    "program_access",
    "cti-access",
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    }
  );


  return response;
}