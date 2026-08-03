import {
  NextResponse
} from "next/server";

import {
  cookies
} from "next/headers";

import {
  deleteSession
} from "@/lib/session";



export async function POST() {


  const cookieStore =
  await cookies();



  const session =
  cookieStore.get(
    "enrin-session"
  );



  if (session) {

    deleteSession(
      session.value
    );

  }



  const response =
  NextResponse.json({
    success: true
  });



  response.cookies.delete(
    "enrin-session"
  );



  return response;


}