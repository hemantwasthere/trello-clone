"use client";

import fetchSuggestion from "@/lib/fetchSuggestion";
import formatTodosForAI from "@/lib/formatTodosForAI";
import { useAIStore } from "@/store/AIStore";
import { useBoardStore } from "@/store/BoardStore";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";

const Header: React.FC = () => {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  const [loading, setLoading, suggestion, setSuggestion] = useAIStore(
    (state) => [
      state.loading,
      state.setLoading,
      state.suggestion,
      state.setSuggestion,
    ]
  );

  const [formattedTodo, setFormattedTodo] = useState<{
    todo: number;
    inprogress: number;
    done: number;
  }>();

  // useEffect(() => {
  //   if (board.columns.size === 0) return;
  //   setLoading(true);

  //   const fetchSuggestionFunc = async () => {
  //     const suggestion = await fetchSuggestion(board);
  //     setSuggestion(suggestion);
  //     setLoading(false);
  //   };

  //   fetchSuggestionFunc();
  // }, [board]);

  useEffect(() => {
    setLoading(true);
    const todos = formatTodosForAI(board);
    setFormattedTodo(todos);
    setLoading(false);
  }, [board]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl ">
        {/* Gradient  */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-green-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50 " />

        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
          priority
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full ">
          {/* Search box  */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial ">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2 "
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar  */}
          <Avatar name="Hemant" round size="50" color="#0055D1" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5 ">
        <p className="flex items-center text-sm font-light p-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1] ">
          <UserCircleIcon
            className={`${
              loading && "animate-spin"
            } inline-block h-10 w-10 text-[#0055D1] mr-1`}
          />
          {loading
            ? "GPT is summarising your tasks for the day..."
            : `Hello There, welcome to the Trello 2.0! Here is a summary of your
          todos: To do - ${formattedTodo?.todo}, In Progress - 
          ${formattedTodo?.inprogress}, Done - ${formattedTodo?.done}. Keep up the
          good work and have a productive day!`}
        </p>
      </div>
    </header>
  );
};

export default Header;
