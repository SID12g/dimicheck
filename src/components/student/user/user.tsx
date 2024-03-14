"use client";

import styles from "@/components/student/user/user.module.css";
import user from "@/../public/images/user.png";
import Image from "next/image";
import { useSession } from "next-auth/react";
import SignInBtn from "@/components/signInBtn/signInBtn";

export default function User() {
  const { data: session }: any = useSession();
  let number = session?.user.user.number || "??";
  if (number < 9) {
    number = "0" + number;
  }
  const telephone =
    session?.user.user.telephone?.replace(
      /^(\d{2,3})(\d{3,4})(\d{4})$/,
      `$1-$2-$3`
    ) || "?";
  return (
    <div className={styles.container}>
      <Image
        className={styles.profile}
        src={user}
        alt="user"
        width={60}
        height={60}
      />
      <div className={styles.wrap}>
        <div className={styles.info}>
          {session ? (
            <p className={styles.name}>24{number} 조성민</p>
          ) : (
            <p className={styles.name}>로그인 해주세요</p>
          )}
          {session ? (
            <p className={styles.telephone}>{telephone}</p>
          ) : (
            <p className={styles.telephone}>로그인이 필요한 서비스 입니다.</p>
          )}
        </div>
        <SignInBtn />
      </div>
    </div>
  );
}
