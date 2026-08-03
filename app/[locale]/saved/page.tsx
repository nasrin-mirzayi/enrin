"use client";

import { useTranslations } from "next-intl";
import OpportunityCard from "@/components/OpportunityCard";
import {useOpportunities} from "@/context/OpportunityContext";

export default function Saved() {

    const t = useTranslations("saved");

    const {opportunities,saved} = useOpportunities();

    const items =
        opportunities.filter(x => saved.includes(x.id));

    return (

        <main
            className="max-w-7xl mx-auto px-6 py-24">


            <h1 className="text-4xl font-bold mb-10">
                {t("title")}
            </h1>
            {
                items.length === 0
                    ?

                    <p>
                        {t("empty")}
                    </p>

                    :

                    <div
                        className="grid md:grid-cols-3 gap-6">
                        {
                            items.map(item => (

                                <OpportunityCard
                                    key={item.id}
                                    opportunity={item}/>
                            ))
                        }
                    </div>
            }
        </main>
    )
}