"use client";

import { account } from "@/appwrite";
import React from "react";

const SignIn: React.FC = () => {
  const googleAuth = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    account.createOAuth2Session(
      "google",
      "https://trello-alt.vercel.app",
      "https://trello-alt.vercel.app"
    );
  };

  return (
    <div>
      <button onClick={(e) => googleAuth(e)} className="p-5">
        Sign in with Google
      </button>
    </div>
  );
};
export default SignIn;
