"use client";

import { useTranslations } from "next-intl";


type Props = {
  search: string;
  setSearch: (v: string) => void;

  category: string;
  setCategory: (v: string) => void;

  typeFilter: string;
  setTypeFilter: (v: string) => void;

  location: string;
  setLocation: (v: string) => void;

  deadlineFilter: string;
  setDeadlineFilter: (v: string) => void;
};

export default function SearchFilter({
  search,
  setSearch,

  category,
  setCategory,

  typeFilter,
  setTypeFilter,

  location,
  setLocation,

  deadlineFilter,
  setDeadlineFilter,

}: Props) {

  const t = useTranslations("searchFilter");


  return (


// title and location 


    <div
      className="grid md:grid-cols-5 gap-4 m-8">
      <input

        value={search}

        onChange={
          e => setSearch(e.target.value)
        }

        placeholder={t("searchTitle")}

        className="border rounded-xl p-3"/>
      <input

        value={location}

        onChange={
          e => setLocation(e.target.value)
        }
        placeholder={t("searchLocation")}

        className="border rounded-xl p-3"/>

{/* category  */}
      <select

        value={category}

        onChange={
          e => setCategory(e.target.value)
        }

        className="border rounded-xl p-3 dark:bg-black">
        <option value="">
          {t("allCategories")}
        </option>

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

{/* type  */}
      <select
        value={typeFilter}

        onChange={
          e => setTypeFilter(e.target.value)
        }

        className="border rounded-xl p-3 dark:bg-black">

        <option value="">
          {t("allTypes")}
        </option>


        <option value="Remote">
          {t("remote")}
        </option>


        <option value="On-site">
          {t("onsite")}
        </option>

      </select>

{/* time  */}
      <select

        value={deadlineFilter}

        onChange={
          e => setDeadlineFilter(e.target.value)
        }

        className="border rounded-xl p-3 dark:bg-black">

        <option value="">
          {t("allDeadlines")}
        </option>


        <option value="soon">
          {t("expiringSoon")}
        </option>


        <option value="month">
          {t("thisMonth")}
        </option>


        <option value="expired">
          {t("expired")}
        </option>


      </select>

    </div>

  )

}