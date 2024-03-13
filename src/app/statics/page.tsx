import styles from "@/app/statics/page.module.css";
import Image from "next/image";
import dimigo from "@/../public/images/dimigo.svg";
import Header from "@/components/student/header/header";
import User from "@/components/student/user/user";
import Navigation from "@/components/student/navigation/navigation";
import Summary from "@/components/student/summary/summary";

export default function Statics() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <User />
        <Navigation nowPage="statics" />
        <Summary />
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
