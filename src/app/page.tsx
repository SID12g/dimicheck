"use client";
import { redirect, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import dimigo from "@/../public/images/dimigo.svg";
import Image from "next/image";

export default function Home() {
  const { data: session }: any = useSession();
  const router = useRouter();
  if (session) {
    redirect("/location");
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div
            className={styles.button}
            onClick={() => {
              router.push("/api/auth/signin");
            }}
          >
            로그인
          </div>
          <div
            className={styles.button}
            onClick={() => {
              router.push("/register");
            }}
          >
            가입
          </div>
        </div>
        <Image
          className={styles.background}
          src={dimigo}
          alt="background"
          width={4096}
          height={775}
        />
      </div>
    );
  }
}
