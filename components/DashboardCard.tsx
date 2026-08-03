"use client";

import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Globe,
  Clock,
  Layers,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";


const icons = {

  total: Layers,

  jobs: Briefcase,

  internships: GraduationCap,

  scholarships: BookOpen,

  remote: Globe,

  expiring: Clock,

};



const percentages = {

  total: 100,

  jobs: 85,

  internships: 70,

  scholarships: 60,

  remote: 75,

  expiring: 35,

};



type CardType =
  | "total"
  | "jobs"
  | "internships"
  | "scholarships"
  | "remote"
  | "expiring";



export default function DashboardCard({

  type,

  title,

  value,

}: {

  type: CardType;

  title: string;

  value: number;

}) {



  const Icon =
    icons[type];


  const percentage =
    percentages[type];



  const chartData = [
    {
      name: "progress",
      value: percentage,
      fill: "#38bdf8",
    }
  ];




  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      whileHover={{
        y: -6
      }}

      transition={{
        duration: 0.3
      }}

      className="relative overflow-hidden rounded-3xl
       border border-sky-100 dark:border-zinc-800 bg-white/70
      dark:bg-zinc-900/70 backdrop-blur-xl p-5 shadow-lg shadow-sky-100/40
      dark:shadow-none hover:shadow-xl hover:shadow-sky-200/40 transition">

      {/* Glow */}

      <div
        className="absolute right-0 top-0 h-24 w-24 rounded-full bg-sky-300/20 blur-3xl"/>
      <div
        className="relative flex items-start justify-between">

        <div>


          <div
            className="flex items-center gap-3">

            <div
              className="rounded-2xl bg-sky-100 dark:bg-sky-900/40 p-3">

              <Icon

                size={22}

                className="text-sky-600 dark:text-sky-300"/>

            </div>

          </div>
          <p

            className="mt-5 text-sm text-gray-500 dark:text-gray-400">

            {title}

          </p>

          <h2

            className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">

            {value}

          </h2>


        </div>

        {/* Circle */}

        <div

          className="h-20 w-20">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <RadialBarChart

              innerRadius="70%"

              outerRadius="100%"

              data={chartData}

              startAngle={90}

              endAngle={-270}

            >


              <RadialBar

                dataKey="value"

                cornerRadius={10}

              />


            </RadialBarChart>


          </ResponsiveContainer>



          <div
            className="absolute right-8 top-[76px] text-xs font-semibold text-sky-600 dark:text-sky-300">

            {percentage}%

          </div>

        </div>
      </div>

      <div

        className="mt-5 flex items-center justify-between text-xs">

        <span

          className="text-gray-400 dark:text-gray-500">

          Live in Enrin

        </span>

        <span

          className="rounded-full bg-sky-50 dark:bg-sky-900/40 px-3 py-1 text-sky-600 dark:text-sky-300">

          Active

        </span>


      </div>
    </motion.div>


  );


}