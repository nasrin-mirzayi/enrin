"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {contactSchema,ContactData,} from "@/lib/contactSchema";
import { useTranslations } from "next-intl";

import {
  Mail,
  MessageSquare,
  User,
  Send,
  MapPin,
  Clock,} from "lucide-react";


export default function ContactPage() {

  const t = useTranslations("contact");

  const [success, setSuccess] = useState(false);

  const {

    register,

    handleSubmit,

    reset,

    formState: {
      errors
    }

  } = useForm<ContactData>({

    resolver: zodResolver(contactSchema)

  });


  function submit(data: ContactData) {


    console.log(data);


    setSuccess(true);


    reset();


    setTimeout(() => {

      setSuccess(false);

    }, 3000);


  }


  return (


    <main

      className="relative min-h-screen overflow-hidden px-6 py-24
                bg-gradient-to-br from-cyan-50 via-blue-50 to-white
                 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">

      {/* background*/}

      <div

        className="absolute top-20 left-10 h-80 w-80 rounded-full
        bg-cyan-300/30 blur-3xl dark:bg-cyan-500/20"/>
      <div

        className="absolute bottom-20 right-10 h-96 w-96
        rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-500/20"/>
      <div

        className="relative z-10 max-w-5xl mx-auto">

        <h1
          className="text-center text-5xl font-bold bg-gradient-to-r
         from-blue-600 to-cyan-400 bg-clip-text text-transparent">

          {t("title")}

        </h1>

        <p
          className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Have questions? Send us a message.
        </p>

        <div

          className="mt-12 grid md:grid-cols-3 gap-8">

          {/* Info Card */}

          <div

            className="rounded-3xl border border-white/40 bg-white/60
           dark:bg-white/10 backdrop-blur-2xl shadow-xl p-8 space-y-8">


            <div className="flex items-center gap-4">


              <div

                className="rounded-xl bg-cyan-100 dark:bg-cyan-500/20 p-3">

                <User

                  className="text-cyan-600 dark:text-cyan-300"/>

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  Nasrin Mirzayi
                </h3>


                <p className="text-sm opacity-70">
                  Developer of Enrin platform
                </p>


              </div>
            </div>

            <div className="flex gap-4 items-center">

              <div

                className="rounded-xl bg-cyan-100 dark:bg-cyan-500/20 p-3">

                <Mail

                  className="text-cyan-600 dark:text-cyan-300"/>

              </div>


              <div>

                <h4 className="font-medium">
                  Email:
                </h4>

                <p className="text-sm opacity-70 break-all">
                  nasrinmirzayi88@gmail.com
                </p>

              </div>


            </div>



            <div className="flex gap-4 items-center">


              <div

                className="rounded-xl bg-indigo-100 dark:bg-indigo-500/20 p-3">

                <MapPin

                  className="text-indigo-600 dark:text-indigo-300"/>

              </div>

              <div>

                <h4 className="font-medium">
                  Location
                </h4>


                <p className="text-sm opacity-70">
                  Iran, Tehran
                </p>


              </div>
            </div>


            <div className="flex gap-4 items-center">


              <div

                className="rounded-xl bg-blue-100 dark:bg-blue-500/20 p-3">

                <Clock

                  className="text-blue-600 dark:text-blue-300"/>

              </div>

              <div>

                <h4 className="font-medium">
                  Response Time
                </h4>

                <p className="text-sm opacity-70">
                  24-48 hours
                </p>

              </div>

            </div>

            <div className="flex gap-4 items-start">

              <div

                className="rounded-xl bg-cyan-100 dark:bg-cyan-500/20 p-3">
                <MessageSquare

                  className="text-cyan-600 dark:text-cyan-300"/>
              </div>

              <div>

                <h4 className="font-medium">
                  Contact For
                </h4>


                <p className="text-sm opacity-70">
                  Questions, feedback,
                  <br />
                  collaboration
                </p>


              </div>
            </div>
          </div>



          {/* Form */}

          <form

            onSubmit={handleSubmit(submit)}

            className="md:col-span-2 rounded-3xl border border-white/40
            bg-white/60 dark:bg-white/10
            backdrop-blur-2xl shadow-xl p-8 space-y-6">

            <div>

              <label className="flex items-center gap-2 mb-2 font-medium">

                <User size={18} />

                {t("name")}

              </label>


              <input


                {...register("name")}


                placeholder={t("name")}


                className="w-full rounded-2xl border border-blue-100
                 dark:border-blue-900 bg-white/70 dark:bg-slate-900/40
                  p-4 outline-none focus:ring-4 focus:ring-cyan-300/30"/>


              <p className="text-red-500 text-sm mt-1">

                {errors.name?.message}

              </p>


            </div>
            <div>


              <label className="flex items-center gap-2 mb-2 font-medium">

                <Mail size={18} />

                {t("email")}

              </label>


              <input


                {...register("email")}


                placeholder={t("email")}

                className="w-full rounded-2xl border border-blue-100 dark:border-blue-900
                bg-white/70 dark:bg-slate-900/40 p-4
                outline-none focus:ring-4 focus:ring-cyan-300/30"/>


              <p className="text-red-500 text-sm mt-1">

                {errors.email?.message}

              </p>


            </div>

            <div>


              <label className="flex items-center gap-2 mb-2 font-medium">

                <MessageSquare size={18} />

                Message

              </label>

              <textarea


                {...register("message")}


                placeholder={t("message")}


                rows={6}



                className="w-full rounded-2xl border border-blue-100
                dark:border-blue-900 bg-white/70 dark:bg-slate-900/40
                p-4 outline-none resize-none focus:ring-4 focus:ring-cyan-300/30"/>

              <p className="text-red-500 text-sm mt-1">

                {errors.message?.message}

              </p>


            </div>

            <button

              type="submit"


              className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r
              from-cyan-400 via-blue-500 to-indigo-500 px-8 py-4
              text-white font-semibold shadow-xl shadow-blue-400/30 transition hover:scale-105">


              <Send size={18} />


              {t("send")}


            </button>

          </form>
        </div>

        {
          success && (

            <div

              className="mt-8 rounded-2xl border border-green-200 bg-green-100/80
               dark:bg-green-900/30 p-5 text-green-700 dark:text-green-300">

              {t("success")} ✅

            </div>

          )

        }

      </div>
    </main>
  )
};