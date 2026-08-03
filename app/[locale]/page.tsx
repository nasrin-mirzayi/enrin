import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Users } from "lucide-react";
import { useTranslations } from "next-intl";


export default function Home() {

  const t = useTranslations("home");


  return (
    <main className="m-0 p-0">

      <section className="relative h-screen md:h-[500px] w-full rounded-2xl overflow-hidden">

        <Image
          src="/header.png"
          alt="header"
          fill
          priority
          className="object-cover"
        />


        <div className="absolute inset-0 flex items-center">


          <div className="text-left text-black px-6 md:px-10 max-w-lg">


            <div
              className="
inline-flex
items-center
gap-2
w-fit
rounded-full
border
border-[#A5F3FC]/40
bg-[#A5F3FC]/20
backdrop-blur-md
px-4
py-2
"
            >

              <Users className="h-5 w-5" />

              <span className="text-sm font-medium">
                {t("badge")}
              </span>

            </div>



            <p className="mt-4 text-sm max-w-xs sm:max-w-sm md:max-w-md md:text-xl">

              {t("description")}

            </p>



            <div className="mt-8">


              <Link
                className="
rounded-full
border
border-[#E7E2D8]
underline
decoration-[#A5F3FC]
font-semibold
decoration-[#67E8F9]
decoration-2
underline-offset-4
hover:text-white
"
                href="/opportunities"
              >

                {t("browse")}

              </Link>


              <br />
              <br />


              <Link
                className="
rounded-full
border
border-[#E7E2D8]
hover:bg-white
font-semibold
underline
decoration-[#67E8F9]
decoration-2
underline-offset-4
hover:text-white
"
                href="/add-opportunity"
              >

                {t("add")}

              </Link>


            </div>


          </div>


        </div>


      </section>


    </main>
  );
}