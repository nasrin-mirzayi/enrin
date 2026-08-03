
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages} from "next-intl/server";

import { AuthProvider } from "@/context/AuthContext";
import { OpportunityProvider } from "@/context/OpportunityContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {ThemeProvider} from "@/components/ThemeProvider";



export async function generateMetadata(){

  return {
  
    title: "Enrin",

    description:
      "Enrin aims to create a place where opportunities, learning, and growth come together. By making valuable resources easier to discover, we help people move closer to their goals and create new possibilities for their future.",



    keywords: [
      "jobs",
      "internships",
      "scholarships",
      "students",
      "opportunities",
      "career",
    ],


    authors: [
      {
        name: "Nasrin Mirzayi",
      },
    ],


    icons: {
      icon: "/logo.png",
    },


    openGraph: {

      title: "Enrin",

      description:
        "Enrin aims to create a place where opportunities, learning, and growth come together. By making valuable resources easier to discover, we help people move closer to their goals and create new possibilities for their future.",

      images: [
        {
          url: "/header.png",
          width: 1200,
          height: 630,
          alt: "Enrin",
        },
      ],

      type: "website",

    }

  };

}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const locale = await getLocale();

  const messages = await getMessages();

  return (

    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >

      <ThemeProvider>

        <AuthProvider>

          <OpportunityProvider>


            <Navbar />
 
            {children}

            <Footer />


          </OpportunityProvider>

        </AuthProvider>

      </ThemeProvider>


    </NextIntlClientProvider>

  );

}