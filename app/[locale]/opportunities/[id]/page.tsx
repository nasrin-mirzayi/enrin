"use client";

import SaveButton from "@/components/SaveButton";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useOpportunities } from "@/context/OpportunityContext";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { CalendarDays, MapPin, Briefcase, Building2, Trash2 } from "lucide-react";
import Link from "next/link";


export default function Details() {


  const t = useTranslations("opportunityDetails");

  const { id } = useParams();

  const {
    opportunities,
    deleteOpportunity
  } = useOpportunities();

  const item =
    opportunities.find(
      (x) => x.id === id
    );

  if (!item) {

    return (

      <main className="py-24 text-center">
        <h1 className="text-3xl font-bold">

          {t("notFound")}

        </h1>

      </main>

    );

  }


  // deadline progress

  const today = new Date();

  const deadline =
    new Date(item.deadline);


  const total =
    deadline.getTime() -
    today.getTime();


  const daysLeft =
    Math.ceil(
      total /
      (1000 * 60 * 60 * 24)
    );

  const progress =
    Math.max(
      0,
      Math.min(
        100,
        (daysLeft / 180) * 100
      )
    );

  return (

    <main
      className="max-w-6xl mx-auto px-6 py-24 space-y-10">

      {/* Hero */}

      <ScrollAnimation>

        <section
          className="rounded-3xl border border-blue-100 bg-white/70
          backdrop-blur-xl shadow-xl shadow-blue-100/40 p-8">

          <div
            className="flex flex-col md:flex-row justify-between gap-6">
            <div>

              <div
                className="flex flex-wrap gap-2 mb-4">

                <span className="rounded-full bg-blue-100 px-4 py-1 text-sm text-blue-700">
                  {item.category}
                </span>


                <span className="rounded-full bg-cyan-100 px-4 py-1 text-sm text-cyan-700">
                  {item.type}
                </span>


              </div>

              <h1
                className="text-4xl font-bold">

                {item.title}

              </h1>

              <p
                className="mt-3 opacity-70 text-lg">

                {item.organization}

              </p>


            </div>

            <SaveButton id={item.id} />


          </div>

        </section>

      </ScrollAnimation>


      {/* Description */}

      <ScrollAnimation>

        <section
          className=" rounded-3xl bg-white/70 backdrop-blur-xl border border-blue-100 p-8">

          <h2 className="text-2xl font-bold mb-4">
            oopurtunity etails:
          </h2>


          <p className="leading-8 opacity-80">
            {item.description}
          </p>


        </section>

      </ScrollAnimation>


      <div
        className=" grid md:grid-cols-2 gap-6">

        {/* Requirements */}

        <ScrollAnimation>

          <section
            className=" rounded-3xl bg-white/70 backdrop-blur-xl border border-blue-100 p-8">

            <h2 className=" text-xl font-bold mb-4">
              {t("requirements")}
            </h2>

            <ul className="space-y-3">

              {
                item.requirements.map((req) => (

                  <li
                    key={req}
                    className="flex gap-2">

                    <span className="text-blue-500">
                      ✓
                    </span>

                    {req}

                  </li>
                ))
              }
            </ul>

          </section>

        </ScrollAnimation>



        {/* Information */}

        <ScrollAnimation>

          <section
            className="rounded-3xl bg-white/70 backdrop-blur-xl border border-blue-100 p-8 space-y-4">

            <h2 className="text-xl font-bold mb-4">
              {t("details")}
            </h2>

            <p className="flex gap-3">
              <Building2 size={20} />
              {item.organization}
            </p>

            <p className="flex gap-3">
              <MapPin size={20} />
              {item.location}
            </p>


            <p className="flex gap-3">
              <Briefcase size={20} />
              {item.type}
            </p>


            <p className="flex gap-3">
              <CalendarDays size={20} />
              {item.deadline}
            </p>


          </section>

        </ScrollAnimation>
      </div>

      {/* Deadline */}

      <ScrollAnimation>

        <section
          className=" rounded-3xl bg-white/70 backdrop-blur-xl border border-blue-100 p-8">
          <h2 className="text-xl font-bold mb-5">
            {t("deadline")}
          </h2>

          <p className="text-3xl font-bold text-blue-500 ">

            {daysLeft > 0
              ?
              `${daysLeft} days left`
              :
              "Expired"
            }

          </p>

          <div
            className=" mt-5 h-4 rounded-full bg-blue-100 overflow-hidden">

            <div
              className=" h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
              style={{
                width: `${progress}%`
              }}
            />

          </div>

        </section>
      </ScrollAnimation>

      {/* Tags */}

      <ScrollAnimation>

        <section>

          <h2 className="font-bold text-xl mb-4">
            Skills
          </h2>

          <div
            className=" flex flex-wrap gap-3">

            {
              item.tags.map(tag => (

                <span
                  key={tag}
                  className=" rounded-full bg-blue-100 px-4 py-2 text-blue-700">

                  {tag}

                </span>

              ))
            }

          </div>
        </section>
      </ScrollAnimation>

      {/* Actions */}

      <div
        className="flex gap-4">
        <Link
          href={item.applyLink}
          target="_blank"
          className="rounded-xl bg-gradient-to-r
      from-blue-500 to-cyan-400 px-8 py-3 text-white shadow-lg shadow-blue-200">

          {t("applyNow")}

        </Link>
      
      </div>

    </main>
  );
}