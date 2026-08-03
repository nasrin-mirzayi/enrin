import {
  NextRequest,
  NextResponse
} from "next/server";

import {
  createSession
} from "@/lib/session";



const DEMO_USER = {

  email: "demo@enrin.com",

  password: "enrin123",

  name: "Demo User"

};




export async function POST(
  request: NextRequest
) {


  const body =
  await request.json();



  const {
    email,
    password
  } = body;




  if (
    email !== DEMO_USER.email ||
    password !== DEMO_USER.password
  ) {


    return NextResponse.json(
      {
        error: "invalid credentials"
      },
      {
        status: 401
      }
    );


  }




  const user = {

    name: DEMO_USER.name,

    email: DEMO_USER.email

  };



  const sessionId =
  createSession(
    user
  );



  const response =
  NextResponse.json({

    success: true,

    user

  });




  response.cookies.set(

    "enrin-session",

    sessionId,

    {

      httpOnly: true,

      secure:
      process.env.NODE_ENV === "production",

      sameSite: "lax",

      path: "/",

      maxAge:
      60 * 60 * 24 * 7

    }

  );




  return response;


}