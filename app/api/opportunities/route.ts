import { NextResponse } from "next/server";

import { opportunities } from "@/data/opportunities";



// GET ALL OPPORTUNITIES

export async function GET() {

  return NextResponse.json(
    opportunities
  );

}





// CREATE OPPORTUNITY

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();


    const newOpportunity = {

      ...body,

      id:
        Date.now().toString(),

    };


    opportunities.push(
      newOpportunity
    );


    return NextResponse.json(
      newOpportunity,
      {
        status: 201
      }
    );


  } catch {

    return NextResponse.json(
      {
        message:
          "Failed to create opportunity"
      },
      {
        status: 500
      }
    );

  }

}