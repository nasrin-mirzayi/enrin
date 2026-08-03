"use client";


export default function Error({

  reset,

}: {

  reset: () => void;

}) {


  return (

    <main className="flex justify-center items-center min-h-[50vh] px-6">


      <div className="text-center space-y-4">


        <h1 className="text-3xl font-bold">

          Something went wrong

        </h1>


        <p className="text-gray-500">

          Failed to load opportunities.

        </p>


        <button

          onClick={reset}

          className=" bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">

          Try Again

        </button>

      </div>


    </main>

  );

}