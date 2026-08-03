"use client";

import { useParams } from "next/navigation";
import { useRouter } from "@/i18n/navigation";
import { useOpportunities } from "@/context/OpportunityContext";
import OpportunityForm from "@/components/OpportunityForm";
import { useTranslations } from "next-intl";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";


export default function Edit() {

  const t = useTranslations("editOpportunity");

  const params = useParams();

  const router = useRouter();

  const { user } = useAuth();

  const id = params.id as string;

  const { opportunities } = useOpportunities();

  useEffect(() => {


    if (!user) {

      router.push("/login");

    }


  }, [
    user,
    router
  ]);


  if (!user) {

    return (

      <main
        className="py-24 text-center">

        <p
          className="text-gray-500">
          Checking authentication...
        </p>

      </main>

    );

  }

  const item =
    opportunities.find(
      (x) => x.id === id
    );

  if (!item) {

    return (

      <main
        className="py-24 text-center">

        <h1
          className="text-3xl font-bold">

          {t("notFound")}

        </h1>


        <p
          className="mt-4 text-gray-500">

          {t("notFoundDescription")}

        </p>


      </main>

    );

  }



  return (

    <main
      className="max-w-3xl mx-auto py-20 px-6">

      <h1
        className="text-3xl font-bold mb-8">

        {t("title")}

      </h1>

      <OpportunityForm

        initialData={item}

        onSave={() =>
          router.push("/dashboard")
        }

      />

    </main>

  );


}