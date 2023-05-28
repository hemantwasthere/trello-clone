"use client";

import { account } from "@/appwrite";
import Board from "@/components/Board";
import Header from "@/components/Header";
import SignIn from "@/components/SignIn";
import { AppwriteException } from "appwrite";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <Board />
    </main>
  );
};

export default Home;
