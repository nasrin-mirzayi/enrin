"use client";

import {
  Languages
} from "lucide-react";

import {
  useState,
  useRef,
  useEffect
} from "react";


import {
  usePathname,
  useRouter
} from "@/i18n/navigation";


export default function LanguageSwitcher() {

  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);



  useEffect(() => {

    function handleClickOutside(
      e: MouseEvent
    ) {

      if (
        ref.current &&
        !ref.current.contains(
          e.target as Node
        )
      ) {

        setOpen(false);

      }

    }


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };


  }, []);





  function changeLanguage(newLocale: string) {

    router.replace(pathname, {
      locale: newLocale
    });

  }

  return (

    <div
      ref={ref}
      className="relative"
    >


      <button

        onClick={() => setOpen(!open)}

        className="h-10 w-10 flex
items-center justify-center rounded-full border border-cyan-300/40 bg-white/20
dark:bg-zinc-900/50 backdrop-blur-md text-zinc-700 dark:text-cyan-200 transition duration-300
hover:border-cyan-300 hover:text-cyan-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(103,232,249,0.7)]">

        <Languages size={18} />

      </button>


      {
        open && (

          <div

            className="absolute right-0 top-12 rounded-xl border border-cyan-300/30
            bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl shadow-lg overflow-hidden">

            <button
              onClick={() => changeLanguage("en")}
              className="block w-full px-4 py-2 text-sm hover:bg-cyan-300/20">

              English
            </button>


            <button
              onClick={() => changeLanguage("fa")}
              className="block w-full px-4 py-2 text-sm hover:bg-cyan-300/20">
              فارسی
            </button>

            <button
              onClick={() => changeLanguage("ko")}
              className="block w-full px-4 py-2 text-sm hover:bg-cyan-300/20">
              한국어
            </button>

          </div>

        )

      }


    </div>

  );

}