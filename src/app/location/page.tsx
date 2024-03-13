import styles from "./page.module.css";

import Image from "next/image";
import dimigo from "@/../public/images/dimigo.svg";
import Header from "@/components/student/header/header";
import User from "@/components/student/user/user";
import Navigation from "@/components/student/navigation/navigation";
import Option from "@/components/student/option/option";
import Etc from "@/components/student/etc/etc";

export default function Location() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <User />
        <Navigation nowPage="location" />
        <Option location="교실" />
        <Option location="화장실, 물" />
        <Option location="방과후" />
        <Option location="동아리" />
        <Etc />
      </div>
      <div className={styles.footer}>
        <div className={styles.inquiry}>
          문의 :<p className={styles.id}>@clwm_222</p>
        </div>
        <Image
          className={styles.background}
          src={dimigo}
          alt="background"
          width={4096}
          height={775}
        />
      </div>
    </main>
  );
}
