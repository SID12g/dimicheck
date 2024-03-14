"use client";
import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function SignIn() {
  return (
    <div>
      <button onClick={() => signIn()}>LogIn</button>
      <button onClick={() => signOut()}>Log Out</button>
    </div>
  );
}

export default SignIn;
