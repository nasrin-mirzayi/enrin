import { NextResponse } from "next/server";

import { opportunities } from "@/data/opportunities";


// UPDATE OPPORTUNITY

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    const { id } = await params;

    const body = await request.json();


    const index =
      opportunities.findIndex(
        item =>
          item.id === id
      );


    if (index === -1) {

      return NextResponse.json(
        {
          message: "Opportunity not found"
        },
        {
          status: 404
        }
      );

    }


    opportunities[index] = {

      ...opportunities[index],

      ...body,

      id,

    };


    return NextResponse.json(
      opportunities[index]
    );


  } catch {

    return NextResponse.json(
      {
        message: "Failed to update opportunity"
      },
      {
        status: 500
      }
    );

  }

}





// DELETE OPPORTUNITY

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {


  const { id } = await params;


  const index =
    opportunities.findIndex(
      item =>
        item.id === id
    );


  if (index === -1) {

    return NextResponse.json(
      {
        message: "Opportunity not found"
      },
      {
        status: 404
      }
    );

  }


  const deleted =
    opportunities.splice(
      index,
      1
    );


  return NextResponse.json(
    deleted[0]
  );

}