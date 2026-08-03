"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Opportunity } from "@/types/opportunity";



type ContextType = {

  opportunities: Opportunity[];

  saved: string[];

  loading: boolean;

  addOpportunity:
  (item: Opportunity) => Promise<void>;

  deleteOpportunity:
  (id: string) => Promise<void>;

  updateOpportunity:
  (item: Opportunity) => Promise<void>;

  toggleSave:
  (id: string) => void;

};

const Context =
  createContext<ContextType | null>(null);

const SAVED_KEY =
  "enrin-saved";

function getStorage<T>(
  key: string,
  fallback: T
): T {


  if (typeof window === "undefined") {
    return fallback;
  }


  try {

    const data =
      localStorage.getItem(key);


    if (!data) {
      return fallback;
    }


    return JSON.parse(data);


  }
  catch {

    return fallback;

  }

}

function setStorage<T>(
  key: string,
  data: T
) {

  localStorage.setItem(
    key,
    JSON.stringify(data)
  );

}

export function OpportunityProvider({
  children
}: {
  children: React.ReactNode;
}) {


  const [
    opportunities,
    setOpportunities
  ]
    =
    useState<Opportunity[]>([]);
  const [
    saved,
    setSaved
  ]
    =
    useState<string[]>([]);
  const [
    loading,
    setLoading
  ]
    =
    useState(true);

  useEffect(() => {


    async function loadOpportunities() {

      try {

        const response =
          await fetch(
            "/api/opportunities"
          );


        const data =
          await response.json();


        setOpportunities(data);


      }
      catch {

        setOpportunities([]);

      }

    }

    async function initialize() {


      const storedSaved =
        getStorage<string[]>(
          SAVED_KEY,
          []
        );


      setSaved(
        storedSaved
      );

      await loadOpportunities();


      setLoading(false);


    }



    initialize();


  }, [])

  // CREATE

  async function addOpportunity(
    item: Opportunity
  ) {


    const response =
      await fetch(
        "/api/opportunities",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body:
            JSON.stringify(item),

        }
      );
    const created =
      await response.json();

    setOpportunities(
      previous => [

        ...previous,

        created

      ]
    );



  }
  // DELETE

  async function deleteOpportunity(
    id: string
  ) {


    await fetch(
      `/api/opportunities/${id}`,
      {
        method: "DELETE",
      }
    );



    setOpportunities(
      previous =>

        previous.filter(
          item =>
            item.id !== id
        )

    );


  }

  // UPDATE

  async function updateOpportunity(
    item: Opportunity
  ) {


    await fetch(
      `/api/opportunities/${item.id}`,
      {

        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body:
          JSON.stringify(item),

      }
    );

    setOpportunities(
      previous =>

        previous.map(
          current =>

            current.id === item.id

              ?

              item

              :

              current

        )

    );



  }
  // SAVE

  function toggleSave(
    id: string
  ) {


    setSaved(
      previous => {


        const updated =

          previous.includes(id)

            ?

            previous.filter(
              item =>
                item !== id
            )

            :

            [
              ...previous,
              id
            ];



        setStorage(
          SAVED_KEY,
          updated
        );



        return updated;


      }

    );


  }

  return (

    <Context.Provider

      value={{

        opportunities,

        saved,

        loading,

        addOpportunity,

        deleteOpportunity,

        updateOpportunity,

        toggleSave,

      }}

    >

      {children}

    </Context.Provider>


  );


}

export function useOpportunities() {


  const context =
    useContext(Context);



  if (!context) {

    throw new Error(
      "useOpportunities must be inside OpportunityProvider"
    );

  }



  return context;


}


// global manager for opportunity data
// store opportunities
// handle CRUD operations
// manage saved opportunities
// connect components with API