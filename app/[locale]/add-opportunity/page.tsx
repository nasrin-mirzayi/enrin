import OpportunityForm from "@/components/OpportunityForm";
import { useTranslations } from "next-intl";


export default function Page() {

    const t = useTranslations("addOpportunity");


    return (

        <main

            className="relative min-h-screen overflow-hidden px-6 py-24
                      bg-gradient-to-br from-cyan-50 via-blue-50 to-white
                     dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">



             {/* Background Glow */}

            <div className="absolute top-10 left-10 h-80 w-80 rounded-full
                 bg-cyan-300/30 blur-3xl dark:bg-cyan-500/20"></div>


            <div className="absolute bottom-10 right-10 h-96w-96 rounded-full
             bg-blue-300/30 blur-3xl dark:bg-blue-500/20"></div>


            <div className="absolute rounded-full
            top-1/2 left-1/2 h-72 w-72
            -translate-x-1/2
            -translate-y-1/2
            bg-sky-200/20 blur-3xl dark:bg-sky-500/10"></div>

            {/* Content */}


            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 className="text-center text-transparent text-5xl font-bold
                    tracking-tight bg-gradient-to-r
                   from-blue-600 via-cyan-500 to-sky-400 bg-clip-text">

                    {t("title")}


                </h1>


                <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                    {t("create")}
                </p>


                <div className="mt-12">
                    <OpportunityForm />

                </div>

            </div>

        </main>
    );
}