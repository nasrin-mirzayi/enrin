"use client";

import {useState} from "react";
import {useAuth} from "@/context/AuthContext";
import {useRouter} from "@/i18n/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {authSchema,AuthFormData} from "@/lib/authSchema";
import {motion} from "framer-motion";
import {useSearchParams} from "next/navigation";


export default function Login() {

  const router =useRouter();

  const searchParams = useSearchParams();

  const redirect =searchParams.get("redirect");

  const {login} = useAuth();

  const [loading, setLoading]=useState(false);

  const [error, setError]=useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors}}
    =
    useForm<AuthFormData>({

      resolver:
        zodResolver(authSchema)

    });

  async function submit(
    data: AuthFormData
  ) {

    try {


      setLoading(true);

      setError("");



      await login(
        data.email,
        data.password
      );



      router.push(
        redirect || "/"
      );

    }
    catch {


      setError(
        "Invalid email or password"
      );


    }
    finally {


      setLoading(false);
    }
  }



  return (

    <main

      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden
      px-6 bg-gradient-to-br from-white via-cyan-50 to-blue-100
      dark:from-zinc-950 dark:via-zinc-900 dark:to-cyan-950">

      <div

        className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"/>
      <div

        className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"/>

      <motion.div

        initial={{
          opacity: 0,
          y: 30
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: .6
        }}

        className="relative w-full max-w-md rounded-3xl border border-cyan-200/40
        bg-white/40 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xl p-8">

        <h1

          className="text-3xl font-bold text-center">

          Happy to have you in Enrin ✨

        </h1>
        <p

          className="mt-3 text-center text-gray-500 dark:text-gray-400">

          Sign in to manage opportunities
        </p>

        <form

          onSubmit={handleSubmit(submit)}
          className="mt-8 space-y-5">

          <div>

            <label className="font-medium">

              Email

            </label>


            <input

              {...register("email")}

              type="email"

              placeholder="demo@enrin.com"

              className="mt-2 w-full rounded-xl border border-cyan-200 bg-white/60 dark:bg-zinc-800 p-3
               outline-none focus:ring-2 focus:ring-cyan-300"/>



            {
              errors.email &&

              <p className="text-red-500 text-sm mt-2">

                {errors.email.message}

              </p>

            }


          </div>

          <div>

            <label className="font-medium">

              Password

            </label>


            <input

              {...register("password")}

              type="password"

              placeholder="enrin123"

              className="mt-2 w-full rounded-xl border border-cyan-200
              bg-white/60 dark:bg-zinc-800 p-3 outline-none focus:ring-2 focus:ring-cyan-300"/>
            {
              errors.password &&

              <p className="text-red-500 text-sm mt-2">

                {errors.password.message}

              </p>

            }

          </div>

          {
            error &&

            <p className="text-red-500 text-center">

              {error}

            </p>

          }

          <button

            disabled={loading}

            className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-50">

            {
              loading
                ?
                "Signing in..."
                :
                "Enter Enrin"
            }


          </button>

        </form>

        <p

          className="mt-6 text-center text-xs text-gray-500">

          enter to log in : demo@enrin.com / enrin123

        </p>

      </motion.div>

    </main>

  );


}