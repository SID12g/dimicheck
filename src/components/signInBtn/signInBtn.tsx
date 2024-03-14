"use client";

import styles from "@/components/signInBtn/signInBtn.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function SignInBtn() {
  const { data: session }: any = useSession();
  return (
    <div>
      {session ? (
        <p className={styles.logout} onClick={() => signOut()}>
          로그아웃
        </p>
      ) : (
        <p className={styles.login} onClick={() => signIn()}>
          로그인
        </p>
      )}
    </div>
  );
}

export default SignInBtn;
