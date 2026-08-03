import { Link } from "@/i18n/navigation";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useTranslations } from "next-intl";

export default function AboutPage() {
const t = useTranslations("about");

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <ScrollAnimation>
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("title")}
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            {t("intro")}
          </p>
        </div>
      </ScrollAnimation>


      <div className="space-y-20">


        <ScrollAnimation direction="left">
          <section className="max-w-2xl mr-auto md:ml-12">

            <div className="relative inline-block">
              <div className="absolute -inset-3 rounded-2xl bg-sky-200/50 blur-xl dark:bg-sky-500/20" />

              <h2 className="relative text-2xl md:text-3xl font-bold text-black dark:text-white">
                {t("missionTitle")}
              </h2>
            </div>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
             {t("missionText")}
            </p>

          </section>
        </ScrollAnimation>



        <ScrollAnimation direction="right">
          <section className="max-w-2xl ml-auto md:mr-12">

            <div className="relative inline-block">
              <div className="absolute -inset-3 rounded-2xl bg-sky-200/50 blur-xl dark:bg-sky-500/20"/>

              <h2 className="relative text-2xl md:text-3xl font-bold text-black dark:text-white">
                {t("providesTitle")}
              </h2>
            </div>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
            {t("providesText")}
            </p>

          </section>
        </ScrollAnimation>



        <ScrollAnimation direction="left">
          <section className="max-w-2xl mr-auto md:ml-12">

            <div className="relative inline-block">
              <div className="absolute -inset-3 rounded-2xl bg-sky-200/50 blur-xl dark:bg-sky-500/20" />

              <h2 className=" relative text-2xl md:text-3xl font-bold text-black dark:text-white">
                {t("visionTitle")}
              </h2>
            </div>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
            {t("visionText")}
            </p>

          </section>
        </ScrollAnimation>


      </div>



      <ScrollAnimation direction="up">

        <section className="
          mt-24 rounded-3xl border border-sky-100
         bg-white/50 px-6 py-14 text-center dark:border-sky-900 dark:bg-zinc-900/50">

          <div className="relative inline-block">

            <div className="
              absolute -inset-4 rounded-2xl bg-sky-200/60 blur-2xl dark:bg-sky-500/20"/>

            <h2 className="relative text-3xl md:text-4xl font-bold text-black dark:text-white">
              {t("ctaTitle")}
            </h2>

          </div>


          <p className="mt-6 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            {t("ctaText")}
          </p>


          <Link
            href="/opportunities"
            className="
              inline-flex
              mt-8
              rounded-xl
              bg-sky-500
              px-7
              py-3
              font-medium
              text-white
              transition
              hover:-translate-y-0.5
              hover:bg-sky-600
            "
          >
            {t("explore")}
          </Link>

        </section>

      </ScrollAnimation>


    </main>
  );
}

