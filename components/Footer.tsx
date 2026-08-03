"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

import { useTranslations } from "next-intl";

import { Dancing_Script } from "next/font/google";
import Link from "next/link";


const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
});


export default function Footer() {

  const t = useTranslations("footer");


  return (

    <footer
      className="border-t border-[#E7E2D8] mt-20">

      <div
        className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center gap-5">


        <h2
          className={`
${dancingScript.className}
      text-5xl font-bold text-sky-600 dark:text-sky-400 tracking-wide`}
        >
          Enrin
        </h2>

        <p
          className="text-sm opacity-60 text-center">
          {t("slogan")}
        </p>

        <div
          className="flex gap-5">

          <Link
            href="https://github.com/nasrin-mirzayi"

            target="_blank"

            rel="noopener noreferrer"

            className="hover:text-sky-500 transition">

            <FaGithub size={22} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/nasrin-mirzayi-6a12143a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition">
            <FaLinkedin size={22} />
          </Link>



          <Link
            href="https://t.me/Na2sr4in6_mir00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition">
            <FaTelegram size={22} />
          </Link>


        </div>

        <p
          className="text-sm opacity-50">
          {t("copyright")}
        </p>

      </div>

    </footer>

  );

}