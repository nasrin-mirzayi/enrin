"use client";

import DashboardCard from "@/components/DashboardCard";
import Charts from "@/components/Charts";
import { useOpportunities } from "@/context/OpportunityContext";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useMemo } from "react";
import { useTranslations } from "next-intl";


export default function Dashboard() {

  const t = useTranslations("dashboard");

  const {
    opportunities
  } = useOpportunities();



  const stats = useMemo(() => {

    let jobs = 0;
    let internships = 0;
    let scholarships = 0;
    let remote = 0;
    let expiringSoon = 0;


    opportunities.forEach(item => {


      if (item.category === "Job")
        jobs++;


      if (item.category === "Internship")
        internships++;


      if (item.category === "Scholarship")
        scholarships++;


      if (item.type === "Remote")
        remote++;



      const deadline =
        new Date(item.deadline).getTime();


      const difference =
        deadline - Date.now();



      if (
        difference > 0 &&
        difference <=
        1000 * 60 * 60 * 24 * 7
      ) {
        expiringSoon++;
      }


    });



    return {
      jobs,
      internships,
      scholarships,
      remote,
      expiringSoon
    };


  }, [opportunities]);





  const chartData = [

    {
      name: t("jobs"),
      value: stats.jobs
    },

    {
      name: t("internships"),
      value: stats.internships
    },

    {
      name: t("scholarships"),
      value: stats.scholarships
    },

    {
      name: t("remote"),
      value: stats.remote
    }

  ];





  const recent =
    opportunities
      .slice()
      .reverse()
      .slice(0, 5);





  return (

    <ScrollAnimation>


      <main
        className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">


        {/* Header */}

        <section
          className="space-y-3">


          <h1
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-transparent">
            {t("title")}
          </h1>



          <p
            className="text-gray-500 dark:text-gray-400 max-w-2xl">
            {t("description")}
          </p>


        </section>





        {/* Statistics */}


        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">


          <DashboardCard
            type="total"
            title={t("totalOpportunities")}
            value={opportunities.length}
          />



          <DashboardCard
            type="jobs"
            title={t("jobs")}
            value={stats.jobs}
          />



          <DashboardCard
            type="internships"
            title={t("internships")}
            value={stats.internships}
          />



          <DashboardCard
            type="scholarships"
            title={t("scholarships")}
            value={stats.scholarships}
          />


          <DashboardCard
            type="remote"
            title={t("remote")}
            value={stats.remote}
          />


          <DashboardCard
            type="expiring"
            title={t("expiringSoon")}
            value={stats.expiringSoon}
          />



        </section>


        {/* Analytics */}


        <section className="rounded-3xl border border-sky-100
        dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl
        shadow-xl shadow-sky-100/40 dark:shadow-none p-5 sm:p-7">


          <h2
            className="text-xl font-bold mb-6">
            {t("analytics")}
          </h2>

          <Charts
            data={chartData}
          />


        </section>


        {/* Latest Opportunities */}


        <section
          className="rounded-3xl border border-sky-100
          dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl
          shadow-xl shadow-sky-100/40 dark:shadow-none p-5 sm:p-7">
          <h2
            className="text-xl font-bold mb-6">
            {t("latest")}
          </h2>

          {
            recent.length === 0 ? (

              <p
                className="text-gray-500">
                {t("noAvailable")}
              </p>

            ) : (

              <div
                className="overflow-x-auto">

                <table
                  className="w-full text-left">

                  <thead>


                    <tr
                      className="border-b border-sky-100 dark:border-zinc-700">


                      <th className="p-3">
                        {t("tableTitle")}
                      </th>


                      <th className="p-3">
                        {t("category")}
                      </th>


                      <th className="p-3">
                        {t("location")}
                      </th>


                      <th className="p-3">
                        {t("type")}
                      </th>


                    </tr>


                  </thead>






                  <tbody>


                    {
                      recent.map(item => (


                        <tr
                          key={item.id}
                          className="border-b border-sky-50 dark:border-zinc-800 hover:bg-sky-50/50 dark:hover:bg-zinc-800/50 transition">
                          <td
                            className="p-3 font-medium">
                            {item.title}
                          </td>

                          <td
                            className="p-3">

                            <span
                              className="ounded-full bg-sky-100 dark:bg-sky-900/40 px-3 py-1 text-sm text-sky-700 dark:text-sky-300"
                            >
                              {item.category}
                            </span>

                          </td>

                          <td className="p-3">
                            {item.location}
                          </td>

                          <td className="p-3">

                            <span
                              className="rounded-full bg-cyan-50 dark:bg-cyan-900/30 px-3 py-1 text-sm text-cyan-700 dark:text-cyan-300">
                              {item.type}
                            </span>

                          </td>

                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
            )
          }
        </section>
      </main>
    </ScrollAnimation>
  );
}