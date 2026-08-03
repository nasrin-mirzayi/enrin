"use client";

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { Opportunity } from "@/types/opportunity";
import SaveButton from "./SaveButton";
import ConfirmModal from "./ConfirmModal";
import { useOpportunities } from "@/context/OpportunityContext";
import {Pencil,Trash2,ArrowRight} from "lucide-react";
import { useTranslations } from "next-intl";
import { useAuth } from "@/context/AuthContext";

export default function OpportunityCard({
  opportunity,
}: {
  opportunity: Opportunity;
}) {

  const { deleteOpportunity } = useOpportunities();

  const [openDelete, setOpenDelete] = useState(false);

const t = useTranslations("opportunityCard");
const { user } = useAuth();

  function handleDelete() {
    deleteOpportunity(opportunity.id);
    setOpenDelete(false);
  }


  return (
    <>

      <div
        className="relative overflow-hidden rounded-3xl border
          border-[#67E8F9]/40  bg-[#A5F3FC]/10 dark:bg-zinc-900/80
          backdrop-blur-md p-6 shadow-lg shadow-[#67E8F9]/10
          transition hover:-translate-y-1 hover:shadow-xl dark:border-[#22D3EE]/40">

        <div
          className="absolute -top-16 -right-16 h-40 w-40 rounded-full
            bg-[#67E8F9]/20 blur-3xl dark:bg-[#22D3EE]/20"/>


        <div className="relative">

          <div className="flex justify-between items-start gap-3">

            <h3
              className="font-bold text-lg underline decoration-[#67E8F9] decoration-2
                underline-offset-4 hover:text-[#0891B2] dark:hover:text-[#67E8F9]">
              {opportunity.title}
            </h3>

            <span
              className="
                rounded-full border border-[#67E8F9] bg-[#A5F3FC]/30 px-3 py-1 text-xs
                font-semibold text-[#0891B2] dark:text-[#67E8F9] whitespace-nowrap">
              {opportunity.category}
            </span>

          </div>


          <p
            className=" mt-3 text-sm text-gray-600 dark:text-gray-300">
            {opportunity.organization}
          </p>

          <div
            className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">

            <p>📍 {opportunity.location}</p>

            <p>🌐 {opportunity.type}</p>

            <p> ⏳ {t("deadline")}: {opportunity.deadline}</p>

          </div>

          {
            opportunity.tags.length > 0 && (

              <div
                className=" mt-5 flex flex-wrap gap-2">

        {
                  opportunity.tags.slice(0,4).map((tag)=>(
                    <span
                      key={tag}
                      className="rounded-full border border-[#67E8F9]/50
                        px-3 py-1 text-xs text-gray-700 dark:text-gray-300">
                      {tag}
                    </span>
                  ))
                }
              </div>
            )
          }

         <div className="mt-6 flex items-center gap-3">

 {/* Details */}

  <Link

    href={`/opportunities/${opportunity.id}`}

    className="flex items-center gap-2 rounded-xl bg-[#0891B2] px-4 py-2 text-sm
      font-semibold text-white transition hover:bg-[#67E8F9] hover:text-black">

    {t("details")}
    <ArrowRight className="h-4 w-4"/>
  </Link>

  
  {/* Save */}
  <SaveButton
    id={opportunity.id}/>


 


{/* Edit */}

{
user && (

<Link

  href={`/edit-opportunity/${opportunity.id}`}

  className="rounded-xl border border-gray-300 p-2 text-gray-600 transition
    hover:border-[#67E8F9] hover:text-[#0891B2] dark:border-zinc-700 dark:text-gray-300">

  <Pencil className="h-5 w-5"/>
</Link>

)
}

{/* delete 
 */}
{
user && (

<button
  onClick={() => setOpenDelete(true)}

  className="rounded-xl border border-red-400 p-2 text-red-500
    transition hover:bg-red-50 dark:hover:bg-red-950">

  <Trash2 className="h-5 w-5"/>
</button>

)
}

</div>

        </div>
      </div>

      <ConfirmModal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleDelete}
      />

    </>
  );
}

