"use client";

import { account } from "@/appwrite";
import Board from "@/components/Board";
import Header from "@/components/Header";
import SignIn from "@/components/SignIn";
import { AppwriteException } from "appwrite";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [session, setSession] = useState(false);

  const getSession = async () => {
    try {
      const response = await account.get();
      return response;
    } catch (error) {
      if (error instanceof AppwriteException) {
        return null;
      }
    }
  };

  useEffect(() => {
    getSession().then((response) => {
      if (response) {
        setSession(true);
      } else {
        setSession(false);
      }
    });
  }, []);

  return (
    <main>
      {session ? (
        <>
          <Header />
          <Board />
        </>
      ) : (
        <SignIn />
      )}
    </main>
  );
};

export default Home;
