"use client";

import { Menu, X, LogIn, LogOut, } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useAuth } from "@/context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  {
    key: "home",
    href: "/"
  },
  {
    key: "opportunities",
    href: "/opportunities"
  },
  {
    key: "addOpportunity",
    href: "/add-opportunity"
  },
  {
    key: "dashboard",
    href: "/dashboard"
  },
  {
    key: "saved",
    href: "/saved"
  },
  {
    key: "about",
    href: "/about"
  },
  {
    key: "contact",
    href: "/contact"
  },

];


export default function Navbar() {


  const t = useTranslations("navbar");

  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const { user, logout } = useAuth();

  const isActive = (href: string) => {

    if (href === "/") {
      return pathname.split("/").length === 2;
    }

    return pathname.endsWith(href);

  };

  return (

    <nav
      className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80
      backdrop-blur-xl border-b border-cyan-200/40 dark:border-cyan-900/40">

      <div
        className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <div
          className="flex items-center gap-3">

          <Link href="/">
            <Image
              src="/logo.png"
              alt="Enrin"
              width={45}
              height={45}
              className="rounded-full border border-cyan-300/40"/>
          </Link>

          <ThemeToggle />

          <LanguageSwitcher />
        </div>

        <div
          className="hidden md:flex items-center gap-5">

          {
            links.map(link => (

              <Link

                key={link.key}

                href={link.href}

                className={`relative text-sm transition duration-300

                   ${isActive(link.href)

                    ?

                    "text-cyan-400"

                    :

                    "text-zinc-700 dark:text-zinc-300 hover:text-cyan-300"

                  }

           after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-cyan-300 after:transition-all

                  ${isActive(link.href)

                    ?

                    "after:w-full"

                    :

                    "after:w-0 hover:after:w-full"

                  }

`}

              >

                {t(link.key)}

              </Link>

            ))

          }

          {
            user ? (

              <button

                onClick={logout}

                className="flex items-center gap-2 text-sm hover:text-red-400 transition">

                <LogOut size={16} />

                Logout

              </button>
            )

              :

              (

                <Link

                  href="/login"

                  className="flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-300 transition">

                  <LogIn size={16} />

                  Login

                </Link>
              )
          }
        </div>

        <button

          className="md:hidden"

          onClick={() => setOpen(!open)}
        >

          {

            open

              ?

              <X />

              :

              <Menu />

          }

        </button>

      </div>

      {
        open && (

          <div

            className="md:hidden px-5 pb-5 space-y-4 border-t border-cyan-200/30">

            {
              links.map(link => (

                <Link

                  key={link.key}

                  href={link.href}

                  onClick={() => setOpen(false)}

                  className="block text-sm hover:text-cyan-300">

                  {t(link.key)}

                </Link>
              ))

            }
            {
              user ? (

                <button

                  onClick={logout}

                  className="flex items-center gap-2 text-sm text-red-400">

                  <LogOut size={16} />

                  Logout

                </button>

              )

                :

                (

                  <Link

                    href="/login"

                    className="flex items-center gap-2">

                    <LogIn size={16} />

                    Login

                  </Link>

                )
            }
          </div>
        )

      }
    </nav>

  );

}