"use client";

import { Link } from "@/i18n/navigation";

import SearchFilter from "@/components/SearchFilter";
import OpportunityCard from "@/components/OpportunityCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useMemo, useState } from "react";
import { useOpportunities } from "@/context/OpportunityContext";
import { useTranslations } from "next-intl";

export default function OpportunitiesPage() {


  const { opportunities } = useOpportunities();
  const today = useMemo(() => Date.now(), []);
  const t = useTranslations("opportunities");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [location, setLocation] = useState("");
  const [deadlineFilter, setDeadlineFilter] = useState("");



  const filtered = opportunities.filter((item) => {


    const matchSearch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase());



    const matchCategory =
      category === "" ||
      item.category === category;



    const matchType =
      typeFilter === "" ||
      item.type === typeFilter;



    const matchLocation =
      location === "" ||
      item.location
        .toLowerCase()
        .includes(location.toLowerCase());



    const deadline =
      new Date(item.deadline).getTime();

    const matchDeadline =

      deadlineFilter === ""

      ||

      (
        deadlineFilter === "soon" &&
        deadline > today &&
        deadline - today <=
        1000 * 60 * 60 * 24 * 7
      )

      ||

      (
        deadlineFilter === "month" &&
        deadline > today &&
        deadline - today <=
        1000 * 60 * 60 * 24 * 30
      )

      ||

      (
        deadlineFilter === "expired" &&
        deadline < today
      );



    return (
      matchSearch &&
      matchCategory &&
      matchType &&
      matchLocation &&
      matchDeadline
    );

  });



  return (

    <main
      className=" max-w-7xl mx-auto px-6 py-10">

      <h1
        className="text-4xl font-bold text-center mb-10">
        {t("title")}
      </h1>



      {/*CTI Opportunity */}

      <ScrollAnimation>

        <div
          className="max-w-5xl mx-auto mt-8">
          <div>

            <div
              className="
                relative overflow-hidden rounded-3xl
                border border-[#67E8F9] bg-[#A5F3FC]/10 dark:bg-zinc-900/80
                backdrop-blur-md  p-6 md:p-8 text-center shadow-lg shadow-[#67E8F9]/20
                transition hover:-translate-y-1 hover:shadow-xl dark:border-[#22D3EE]">


              <div
                className="
                  absolute -top-20 left-1/2 h-60 w-60
                  -translate-x-1/2 rounded-full bg-[#67E8F9]/30  blur-3xl dark:bg-[#22D3EE]/20"/>


              <div className="relative">


                <span
                  className="
                    inline-flexrounded-full border
                    border-[#67E8F9] bg-[#A5F3FC]/30 px-4 py-1
                    text-sm font-semibold text-[#0891B2] dark:text-[#67E8F9]">
                  ⭐ {t("featured")}
                </span>

                <h2
                  className="mt-5 text-2xl md:text-3xl font-bold dark:text-white">
                  Code to Inspire
                </h2>
                <p
                  className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
                  {t("ctiDescription")}
                </p>

                <div
                  className=" mt-6 flex justify-center flex-wrap gap-3">
                  {
                    [
                      t("technology"),
                      t("education"),
                      t("coding"),
                      t("online")
                    ].map((tag: string) => (

                      <span
                        key={tag}
                        className="rounded-full border border-[#67E8F9] px-4 py-1 text-sm dark:text-[#67E8F9]">
                        {tag}
                      </span>

                    ))
                  }
                </div>

                <Link href="/cti"
                  className="mt-8 inline-flex rounded-xl bg-sky-500 px-6 py-3 font-semibold
                   text-white transition hover:bg-sky-600">
                  {t("exploreProgram")} →
                </Link>


              </div>

              
            </div>
          </div>
        </div>
      </ScrollAnimation>



            <SearchFilter

        search={search}
        setSearch={setSearch}

        category={category}
        setCategory={setCategory}

        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}

        location={location}
        setLocation={setLocation}

        deadlineFilter={deadlineFilter}
        setDeadlineFilter={setDeadlineFilter}

      />


      {
        filtered.length === 0

          ?

          (

            <div
              className=" py-20 text-center">

              <h2
                className="text-2xl font-bold">
                {t("noResults")}
              </h2>
              <p className="mt-2 text-gray-500">
                {t("tryAnother")}
              </p>

            </div>

          )

          :

          (

            <div
              className="mt-12 grid gap-6 md:grid-cols-3">

              {
                filtered.map((item) => (

                  <ScrollAnimation
                    key={item.id}
                  >

                    <OpportunityCard
                      opportunity={item}
                    />
                  </ScrollAnimation>
                ))
              }
            </div>
          )
      }

    </main>
  );
}

