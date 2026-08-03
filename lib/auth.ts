

import {
  cookies
} from "next/headers";



import {
  getSession
} from "@/lib/session";



export async function getCurrentUser() {


  const cookieStore =
  await cookies();



  const session =
  cookieStore.get(
    "enrin-session"
  );



  if (!session) {

    return null;

  }



  const user =
  getSession(
    session.value
  );



  return user || null;


}