"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {opportunitySchema,OpportunityFormData} from "@/lib/opportunitySchema";
import {Opportunity,OpportunityCategory,OpportunityType} from "@/types/opportunity";
import { useOpportunities } from "@/context/OpportunityContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import {Building2,MapPin,CalendarDays,Link,Tag,FileText,Layers,Globe,} from "lucide-react";

type Props = {
  initialData?: Opportunity;
  onSave?: () => void;
};

export default function OpportunityForm({
  initialData,
  onSave,
}: Props) {

  const { user } = useAuth();

  const router = useRouter();

  const t = useTranslations("opportunityForm");

  const {addOpportunity,updateOpportunity} = useOpportunities();

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }

  } = useForm<OpportunityFormData>({

    resolver:
      zodResolver(opportunitySchema),


    defaultValues: {

      title:
        initialData?.title ?? "",

      organization:
        initialData?.organization ?? "",

      category:
        initialData?.category ?? "Job",

      location:
        initialData?.location ?? "",

      type:
        initialData?.type ?? "Remote",

      deadline:
        initialData?.deadline ?? "",

      description:
        initialData?.description ?? "",

      requirements:
        initialData?.requirements.join(", ") ?? "",

      applyLink:
        initialData?.applyLink ?? "",

      tags:
        initialData?.tags.join(", ") ?? "",

    }
  });

  const [success, setSuccess] = useState(false);

  if (!user) {

    return (

      <div
        className="max-w-xl mx-auto mt-20 rounded-3xl
        border border-cyan-200 bg-white/60 dark:bg-white/10
        backdrop-blur-2xl shadow-xl p-10 text-center">

        <h2 className="text-3xl font-bold">
          Login required
        </h2>

        <p className="mt-4 opacity-70">
          You need an account to create opportunities.
        </p>

        <button

          onClick={() => router.push("/login")}

          className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 
          text-white shadow-lg hover:scale-105 transition px-8 py-3">

          Go to Login

        </button>


      </div>

    );

  }


  function submit(
    data: OpportunityFormData
  ) {


    const opportunity: Opportunity = {


      id:
        initialData?.id ??
        crypto.randomUUID(),

      title: data.title,

      organization: data.organization,

      category:
        data.category as OpportunityCategory,

      location: data.location,

      type:
        data.type as OpportunityType,

      deadline: data.deadline,

      description: data.description,

      requirements:
        data.requirements
          .split(",")
          .map(x => x.trim())
          .filter(Boolean),


      applyLink: data.applyLink,


      tags:
        data.tags
          .split(",")
          .map(x => x.trim())
          .filter(Boolean),

    };

    if (initialData) {

      updateOpportunity(opportunity);

    }
    else {

      addOpportunity(opportunity);

      reset();

    }


    setSuccess(true);


    setTimeout(() => {

      setSuccess(false);

    }, 3000);

    onSave?.();

  }


  return (
    <div
      className="max-w-4xl mx-auto">
      <form

        onSubmit={handleSubmit(submit)}

        className="space-y-8">

        {/* Basic Information */}

        <section

          className="rounded-3xl border border-white/50 bg-white/60 dark:bg-white/10 backdrop-blur-2xl
          shadow-xl shadow-blue-200/30 dark:shadow-blue-900/20 p-8 transition hover:-translate-y-1">

          <div className="flex items-center gap-3 mb-6">


            <div
              className="rounded-xl bg-cyan-100 dark:bg-cyan-500/20 p-3">

              <FileText
                className="text-cyan-600 dark:text-cyan-300"/>

            </div>

            <div>

              <h2 className="text-2xl font-bold">

                {t("basicInformation")}

              </h2>


              <p className="text-sm opacity-60">

                Main opportunity information

              </p>

            </div>

          </div>


          <div>


            <label className="flex items-center gap-2 mb-2 font-medium">

              {t("title")}

            </label>



            <input

              {...register("title")}

              placeholder={t("titlePlaceholder")}


              className="w-full rounded-2xl border border-blue-100
              dark:border-blue-900 bg-white/70 dark:bg-slate-900/40 p-4
              outline-none transition focus:ring-4 focus:ring-cyan-300/30"/>

            {
              errors.title && (

                <p className="text-red-500 text-sm mt-2">

                  {errors.title.message}

                </p>

              )

            }
          </div>
          <div>

            <label className="flex items-center gap-2 mb-2 font-medium">

              <Building2 size={18} />

              {t("organization")}

            </label>
            <input

              {...register("organization")}

              placeholder={t("organizationPlaceholder")}


              className="w-full rounded-2xl border border-blue-100
              dark:border-blue-900 bg-white/70 dark:bg-slate-900/40
              p-4 outline-none focus:ring-4 focus:ring-cyan-300/30"/>

            {
              errors.organization && (

                <p className="text-red-500 text-sm mt-2">

                  {errors.organization.message}

                </p>

              )

            }

          </div>

          <div>

            <label className="flex items-center gap-2 mb-2 font-medium">

              <Layers size={18} />

              {t("category")}

            </label>

            <select

              {...register("category")}


              className="w-full rounded-2xl border border-blue-100 dark:border-blue-900
               bg-white/70 dark:bg-slate-900/40 p-4 outline-none">


              <option value="Job">
                {t("job")}
              </option>

              <option value="Internship">
                {t("internship")}
              </option>

              <option value="Scholarship">
                {t("scholarship")}
              </option>

              <option value="Course">
                {t("course")}
              </option>

            </select>
          </div>
        </section>

        {/* Opportunity Details */}


        <section

          className="rounded-3xl border border-white/50 bg-white/60 dark:bg-white/10
          backdrop-blur-2xl shadow-xl shadow-blue-200/30
          dark:shadow-blue-900/20 p-8 transition hover:-translate-y-1">

          <div className="flex items-center gap-3 mb-6">
            <div
              className="rounded-xl bg-blue-100 dark:bg-blue-500/20 p-3">

              <Globe
                className="text-blue-600 dark:text-blue-300"/>

            </div>

            <div>

              <h2 className="text-2xl font-bold">

                {t("opportunityDetails")}

              </h2>

              <p className="text-sm opacity-60">

                Location and deadline

              </p>

            </div>
          </div>

          <div>


            <label className="flex items-center gap-2 mb-2 font-medium">

              <MapPin size={18} />

              {t("location")}

            </label>

            <input

              {...register("location")}


              placeholder={t("locationPlaceholder")}


              className="w-full rounded-2xl border border-blue-100
             dark:border-blue-900 bg-white/70 dark:bg-slate-900/40 p-4
             outline-none focus:ring-4 focus:ring-cyan-300/30"/>


          </div>

          <div>


            <label className="mb-2 block font-medium">

              {t("type")}

            </label>


            <select

              {...register("type")}


              className="w-full rounded-2xl border border-blue-100
              dark:border-blue-900 bg-white/70 dark:bg-slate-900/40 p-4">

              <option value="Remote">

                {t("remote")}

              </option>

              <option value="On-site">

                {t("onsite")}

              </option>


            </select>


          </div>


          <div>


            <label className="flex items-center gap-2 mb-2 font-medium">

              <CalendarDays size={18} />

              {t("deadline")}

            </label>


            <input

              type="date"

              {...register("deadline")}


              className="w-full rounded-2xl border border-blue-100
              dark:border-blue-900 bg-white/70 dark:bg-slate-900/40 p-4"/>

          </div>

        </section>
        {/* Description & Application */}

        <section

          className="rounded-3xl border border-white/50 bg-white/60 dark:bg-white/10 backdrop-blur-2xl
          shadow-xl shadow-blue-200/30 dark:shadow-blue-900/20 p-8 transition hover:-translate-y-1">

          <div className="flex items-center gap-3 mb-6">


            <div

              className="rounded-xl bg-sky-100 dark:bg-sky-500/20 p-3">

              <FileText
                className="text-sky-600 dark:text-sky-300"/>
            </div>

            <div>

              <h2 className="text-2xl font-bold">

                {t("descriptionApplication")}

              </h2>


              <p className="text-sm opacity-60">

                Explain the opportunity clearly

              </p>


            </div>

          </div>

          <div>


            <label className="block mb-2 font-medium">

              {t("description")}

            </label>


            <textarea


              {...register("description")}


              placeholder={t("descriptionPlaceholder")}


              rows={6}


              className="w-full rounded-2xl border border-blue-100
              dark:border-blue-900 bg-white/70 dark:bg-slate-900/40 p-4
              outline-none resize-none focus:ring-4 focus:ring-cyan-300/30"/>

            {
              errors.description && (

                <p className="text-red-500 text-sm mt-2">

                  {errors.description.message}

                </p>

              )
            }

          </div>

          <div>

            <label className="block mb-2 font-medium">

              Requirements

            </label>

            <input


              {...register("requirements")}


              placeholder={t("requirementsPlaceholder")}


              className="w-full rounded-2xl border border-blue-100 dark:border-blue-900
              bg-white/70 dark:bg-slate-900/40 p-4 outline-none focus:ring-4 focus:ring-cyan-300/30"/>

          </div>

          <div>


            <label className="flex items-center gap-2 mb-2 font-medium">

              <Link size={18} />

              {t("applicationLink")}

            </label>

            <input


              {...register("applyLink")}


              placeholder={t("applyLinkPlaceholder")}


              className="w-full rounded-2xl border border-blue-100 dark:border-blue-900 
              bg-white/70 dark:bg-slate-900/40
              p-4 outline-none focus:ring-4 focus:ring-cyan-300/30"/>

          </div>


          <div>

            <label className="flex items-center gap-2 mb-2 font-medium">

              <Tag size={18} />

              {t("tags")}

            </label>


            <input


              {...register("tags")}


              placeholder={t("tagsPlaceholder")}


              className="w-full rounded-2xl border border-blue-100 dark:border-blue-900 bg-white/70
              dark:bg-slate-900/40 p-4 outline-none focus:ring-4 focus:ring-cyan-300/30"/>

          </div>
        </section>

        <button

          type="submit"


          className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
          px-8 py-4 text-white font-semibold text-lg shadow-xl shadow-blue-400/30 transition
          hover:scale-[1.02] hover:shadow-blue-400/50 active:scale-95">

          {

            initialData

              ?

              t("updateOpportunity")

              :

              t("addOpportunity")

          }


        </button>
        {
          success && (

            <div

              className="rounded-2xl border border-green-200 bg-green-100/80
               dark:bg-green-900/30 dark:border-green-700 p-5
               text-green-700 dark:text-green-300 font-medium backdrop-blur-xl">

              {t("savedSuccessfully")} ✅


            </div>

          )

        }

      </form>
    </div>
  );

}
