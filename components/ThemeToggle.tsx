"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);



  if (!mounted) {

    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="
          h-10
          w-10

          flex
          items-center
          justify-center

          rounded-full

          border
          border-cyan-300/40

          bg-white/10
          dark:bg-zinc-900/50

          backdrop-blur-md
        "
      />
    );

  }



  return (

    <button

      type="button"

      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }


      aria-label="Toggle theme"


      className="
        group

        h-10
        w-10

        flex
        items-center
        justify-center

        rounded-full

        border
        border-cyan-300/40

        bg-white/20
        dark:bg-zinc-900/50

        backdrop-blur-md

        text-zinc-800
        dark:text-cyan-200

        transition
        duration-300

        hover:scale-110

        hover:border-cyan-300

        hover:shadow-[0_0_15px_rgba(103,232,249,0.7)]
      "

    >


      {
        theme === "light"

        ?

        <Moon
          size={18}
          className="
            transition
            group-hover:rotate-12
          "
        />

        :

        <Sun
          size={18}
          className="
            text-cyan-300
            transition
            group-hover:rotate-90
          "
        />

      }


    </button>

  );

}