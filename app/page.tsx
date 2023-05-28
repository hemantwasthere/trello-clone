"use client";

import Board from "@/components/Board";
import Header from "@/components/Header";
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
