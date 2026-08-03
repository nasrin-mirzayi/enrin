import Image from "next/image";
import Link from "next/link";
import {
Check,
Clock,
Languages,
BookOpen,
BarChart3,
} from "lucide-react";

import ScrollAnimation from "@/components/ScrollAnimation";
 
export default function CtiPage() {
return ( <main className="min-h-screen px-4 py-6">


  <ScrollAnimation>
    <h1 className="my-6 text-center text-4xl font-bold">
      Code to Inspire
    </h1>
  </ScrollAnimation>

  {/* About CTI */}
  <ScrollAnimation>
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 p-6 md:flex-row">
      <p className="flex-1 leading-7">
        Code to Inspire stands as a testament to Fereshteh&apos;s
        unwavering belief in the potential of Afghan women. Through the
        school&apos;s comprehensive coding curriculum, it not only imparts
        technical skills but also fosters inspiration and empowerment. By
        enabling women to break through societal barriers, CTI paves the
        way for a brighter future—one where these talented individuals can
        thrive, shattering limitations and shaping their own destinies.
        <br />
        <br />
        Together, Code to Inspire and its remarkable founder are
        transforming lives, unlocking doors of opportunity, and instilling
        hope. The organization&apos;s mission is clear: to empower Afghan
        women through education, technology, and the pursuit of their
        dreams, ultimately paving the way for a more inclusive and
        prosperous Afghanistan.
      </p>

      <div className="relative h-64 w-full flex-1 overflow-hidden rounded-xl">
        <Image
          src="/cti.jpg"
          alt="Code to Inspire"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </ScrollAnimation>

  <section className="mt-12">

    <ScrollAnimation>
      <h2 className="text-center text-2xl font-semibold">
        Course Catalog
      </h2>
    </ScrollAnimation>

    {/* Web Development */}
    <ScrollAnimation>
      <div className="mx-auto mt-8 max-w-3xl">

        <h3 className="mb-4 w-fit rounded-full border border-[#A5F3FC]/40 bg-[#A5F3FC]/20 px-4 py-2">
          Web Development
        </h3>

        <div className="rounded-xl bg-white p-6 text-center text-black shadow-sm">

          <h4 className="text-2xl font-bold">
            Web Dev Essentials
          </h4>

          <p className="py-4 leading-7">
            This course is designed to help beginners learn the essential
            skills needed to build modern websites from scratch. Students
            will start with JavaScript fundamentals to add interactivity to
            their web pages, learn Git and GitHub to manage and share their
            code professionally, and explore WordPress to create and
            customize dynamic websites without coding. By the end of the
            course, students will have the confidence and practical
            experience to build, manage, and publish their own websites.
            No prior coding experience is required.
          </p>

          <h5 className="py-4 text-lg font-bold">
            Course Details
          </h5>

          <div className="grid gap-8 text-left md:grid-cols-2">

            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Introduction to the Web
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Getting Started with HTML
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Styling with CSS
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Styling with Bootstrap
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Version Control with Git and GitHub
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Introduction to JavaScript
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Introduction to WordPress
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="text-cyan-500" size={19} />
                Duration: 11h
              </li>

              <li className="flex items-center gap-3">
                <Languages className="text-cyan-500" size={19} />
                Language: Persian
              </li>

              <li className="flex items-center gap-3">
                <BookOpen className="text-cyan-500" size={19} />
                Lessons: 82
              </li>

              <li className="flex items-center gap-3">
                <BarChart3 className="text-cyan-500" size={19} />
                Skill Level: Beginner
              </li>
            </ul>
          </div>

          <Link
            href="https://www.codetoinspire.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-lg border border-[#67E8F9] px-6 py-4 text-center font-semibold text-[#0891B2] underline decoration-2 decoration-[#67E8F9] underline-offset-4 transition hover:bg-[#A5F3FC]/20"
          >
            Enroll Now →
          </Link>

        </div>
      </div>
    </ScrollAnimation>

  
    <ScrollAnimation>
      <div className="mx-auto mt-10 max-w-3xl">

        <h3 className="mb-4 w-fit rounded-full border border-[#A5F3FC]/40 bg-[#A5F3FC]/20 px-4 py-2">
          DevOps & Cloud Computing
        </h3>

        <div className="rounded-xl bg-white p-6 text-center text-black shadow-sm">

          <h4 className="text-2xl font-bold">
            Introduction to Infrastructure as Code
          </h4>

          <p className="py-4 leading-7">
            This is an introductory course to creating Infrastructure as
            Code (IaC) using Amazon Web Services Cloud Development Kit
            (AWS CDK).
          </p>

          <h5 className="py-4 text-lg font-bold">
            Course Details
          </h5>

          <div className="grid gap-8 text-left md:grid-cols-2">

            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Lesson 1: Introduction to Infrastructure as Code (IaC)
                and AWS CDK
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Lesson 2: Setting up your environment
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Lesson 3: App and Stacks
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Lesson 4: S3 in CDK
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Lesson 5: AWS Lambda in CDK
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Lesson 6: API Gateway in CDK
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Lesson 7: Final product and resource cleanup
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="text-cyan-500" size={19} />
                Duration: 2h
              </li>

              <li className="flex items-center gap-3">
                <Languages className="text-cyan-500" size={19} />
                Language: English
              </li>

              <li className="flex items-center gap-3">
                <BookOpen className="text-cyan-500" size={19} />
                Lessons: 15
              </li>

              <li className="flex items-center gap-3">
                <BarChart3 className="text-cyan-500" size={19} />
                Skill Level: Intermediate
              </li>
            </ul>
          </div>

          <Link
            href="https://www.codetoinspire.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-lg border border-[#67E8F9] px-6 py-4 text-center font-semibold text-[#0891B2] underline decoration-2 decoration-[#67E8F9] underline-offset-4 transition hover:bg-[#A5F3FC]/20"
          >
            Enroll Now →
          </Link>

        </div>
      </div>
    </ScrollAnimation>

    {/* Programming & Software Development */}
    <ScrollAnimation>
      <div className="mx-auto mt-10 max-w-3xl">

        <h3 className="mb-4 w-fit rounded-full border border-[#A5F3FC]/40 bg-[#A5F3FC]/20 px-4 py-2">
          Programming & Software Development
        </h3>

        <div className="rounded-xl bg-white p-6 text-center text-black shadow-sm">

          <h4 className="text-2xl font-bold">
            Introduction to Building with Amazon Web Services
          </h4>

          <p className="py-4 leading-7">
            An introductory course on the cloud and building with Amazon
            Web Services (AWS). Designed for beginners to cloud concepts
            and AWS, and ideally those with some coding experience.
          </p>

          <h5 className="py-4 text-lg font-bold">
            Course Details
          </h5>

          <div className="grid gap-8 text-left md:grid-cols-2">

            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Introduction to Amazon Polly and Lambda
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Understanding the Cloud and AWS
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Introduction to API Gateway
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                AWS Lambda Deep Dive
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Project Completion
              </li>

              <li className="flex gap-2">
                <Check className="mt-1 shrink-0 text-cyan-500" size={18} />
                Storage with S3
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="text-cyan-500" size={19} />
                Duration: 1h
              </li>

              <li className="flex items-center gap-3">
                <Languages className="text-cyan-500" size={19} />
                Language: English
              </li>

              <li className="flex items-center gap-3">
                <BookOpen className="text-cyan-500" size={19} />
                Lessons: 15
              </li>

              <li className="flex items-center gap-3">
                <BarChart3 className="text-cyan-500" size={19} />
                Skill Level: Intermediate
              </li>
            </ul>
          </div>

          <Link
            href="https://www.codetoinspire.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-lg border border-[#67E8F9] px-6 py-4 text-center font-semibold text-[#0891B2] underline decoration-2 decoration-[#67E8F9] underline-offset-4 transition hover:bg-[#A5F3FC]/20"
          >
            Enroll Now →
          </Link>

        </div>
      </div>
    </ScrollAnimation>

  </section>
</main>


);
}
