import Header from "@/components/header/header";
import styles from "./page.module.css";
import User from "@/components/user/user";
import Navigation from "@/components/navigation/navigation";
import Option from "@/components/option/option";
import Etc from "@/components/etc/etc";
import Image from "next/image";
import dimigo from "@/../public/images/dimigo.svg";

export default function Location() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <User />
        <Navigation />
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
