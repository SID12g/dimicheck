"use client";

import styles from "@/components/signInBtn/signInBtn.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function SignInBtn() {
  const { data: session }: any = useSession();
  const router = useRouter();
  return (
    <div>
      {session ? (
        <p className={styles.logout} onClick={() => signOut()}>
          로그아웃
        </p>
      ) : (
        <p
          className={styles.login}
          onClick={() => {
            router.push("/");
          }}
        >
          로그인
        </p>
      )}
    </div>
  );
}

export default SignInBtn;
