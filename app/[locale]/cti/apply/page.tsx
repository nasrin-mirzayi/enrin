"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";

export default function CtiApplyPage() {

  const router = useRouter();


  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [study, setStudy] = useState("");

  const [error, setError] = useState("");


  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    const response = await fetch(
      "/api/verify-program",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          nationality,
          gender,
          study,
        }),
      }
    );


    const data = await response.json();


    if (data.allowed) {

      router.push("/cti");

    } else {

      setError(
        "You are not eligible for this program."
      );

    }

  }



  return (

    <main className="min-h-screen p-10">


      <h1 className="text-3xl font-bold text-center py-3">
        Code to Inspire Application
      </h1>



      <form
        onSubmit={handleSubmit}
        className="mt-8  space-y-5 max-w-3xl mx-auto">


        <input
          className="w-full border p-3"
          placeholder="Full Name"
          value={name}
          onChange={
            e => setName(e.target.value)
          }
        />



        <select
          className="w-full border p-3 dark:bg-black"
          value={nationality}
          onChange={
            e => setNationality(e.target.value)
          }
        >

          <option value="">
            Select Nationality
          </option>

          <option value="Afghanistan">
            Afghanistan
          </option>

          <option value="Other">
           Italian
          </option>

            <option value="Other">
            American
          </option>

          <option value="Other">
            Other
          </option>

        </select>



        <select
          className="w-full border p-3 dark:bg-black"
          value={gender}
          onChange={
            e => setGender(e.target.value)
          }
        >

          <option value="">
            Select Gender
          </option>

          <option value="Woman">
            Woman
          </option>

          <option value="Man">
            Man
          </option>

        </select>



        <select
          className="w-full border p-3 dark:bg-black"
          value={study}
          onChange={
            e => setStudy(e.target.value)
          }
        >

          <option value="">
            Committed to study?
          </option>

          <option value="Yes">
            Yes
          </option>

          <option value="No">
            No
          </option>

        </select>



       <button
  type="submit"
  className="rounded bg-black dark:bg-white hover:bg-blue-700 px-5 py-3 text-white dark:text-black"
>
  Apply
</button>


      </form>



      {
        error && (
          <p className="mt-5 text-red-600">
            {error}
          </p>
        )
      }


    </main>
  );
}