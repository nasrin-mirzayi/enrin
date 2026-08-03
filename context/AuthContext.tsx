"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


type User = {
  name: string;
  email: string;
};


type AuthType = {

  user: User | null;

  loading: boolean;

  login:
  (email: string, password: string) => Promise<void>;

  logout:
  () => Promise<void>;

};


const AuthContext =
createContext<AuthType | null>(null);



export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {


  const [user, setUser] =
  useState<User | null>(null);


  const [loading, setLoading] =
  useState(true);



  useEffect(() => {


    async function checkSession() {

      try {

        const response =
        await fetch("/api/auth/me");


        if (response.ok) {

          const data =
          await response.json();

          setUser(data.user);

        }
        else {

          setUser(null);

        }


      }
      catch {

        setUser(null);

      }
      finally {

        setLoading(false);

      }

    }


    checkSession();


  }, []);





  async function login(
    email: string,
    password: string
  ) {


    const response =
    await fetch(
      "/api/auth/login",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email,
          password
        })

      }
    );



    if (!response.ok) {

      throw new Error(
        "Invalid email or password"
      );

    }



    const data =
    await response.json();


    setUser(data.user);


  }






  async function logout() {


    await fetch(
      "/api/auth/logout",
      {
        method: "POST"
      }
    );


    setUser(null);


  }






  return (

    <AuthContext.Provider

      value={{
        user,
        loading,
        login,
        logout
      }}

    >

      {children}

    </AuthContext.Provider>

  );

}






export function useAuth() {


  const context =
  useContext(AuthContext);



  if (!context) {

    throw new Error(
      "AuthProvider missing"
    );

  }



  return context;


}
// a bridge btw my ui and my authentication api.

//  who is loged in
// provide login/logout to all components
// check session if already exists.