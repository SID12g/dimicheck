import styles from "@/app/statics/page.module.css";
import Header from "@/components/header/header";
import User from "@/components/user/user";
import Navigation from "@/components/navigation/navigation";
import Option from "@/components/option/option";
import Etc from "@/components/etc/etc";
import Image from "next/image";
import dimigo from "@/../public/images/dimigo.svg";

export default function Statics() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <User />
        <Navigation nowPage="statics" />
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
