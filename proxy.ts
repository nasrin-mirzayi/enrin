import {
  NextRequest,
  NextResponse
} from "next/server";

import createMiddleware from "next-intl/middleware";  
// import the lan routing proxy



const intlProxy =
createMiddleware({

  locales:[
    "en",
    "fa",
    "ko"
  ],

  defaultLocale:"en",

});





export function proxy(
  request: NextRequest
){


  const pathname =
  request.nextUrl.pathname;


  const locale =
  pathname.split("/")[1] || "en";





  /*
    Protect logged-in pages
  */

  const protectedRoute =
  pathname.match(
    /^\/(en|fa|ko)\/(dashboard|add-opportunity|edit-opportunity)/
  );



  if(protectedRoute){


    const session =
    request.cookies.get(
      "enrin-session"
    );


    if(!session?.value){


      const loginUrl =
      new URL(
        `/${locale}/login`,
        request.url
      );


      loginUrl.searchParams.set(
        "redirect",
        pathname.replace(`/${locale}`, "")
      );



      return NextResponse.redirect(
        loginUrl
      );


    }


  }





  /*
    CTI protection
  */


  const ctiRoute =
  pathname.match(
    /^\/(en|fa|ko)\/cti/
  );



  const applyRoute =
  pathname.match(
    /^\/(en|fa|ko)\/cti\/apply/
  );



  if(
    ctiRoute &&
    !applyRoute
  ){


    const access =
    request.cookies.get(
      "program_access"
    );



    if(
      access?.value !== "cti-access"
    ){


      return NextResponse.redirect(

        new URL(
          `/${locale}/cti/apply`,
          request.url
        )

      );


    }


  }





  return intlProxy(request);


}



// proxy check all routes first also bc of next-intl

export const config = {

  matcher:[

    "/",

    "/(en|fa|ko)/:path*"

  ]

};


// before any page render proxy work.
// run for all localized routes (/en/* /fa/* /ko*)
// and my protected pages ( add-oppurtunity dashboard edit-oppurtunity)

// protect cti page ---> check the program access cookie and redirect to apply page


// proxy passes requests to next-intl so the correct lang load.