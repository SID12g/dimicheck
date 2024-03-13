import styles from "@/app/status/page.module.css";
import Image from "next/image";
import dimigo from "@/../public/images/dimigo.svg";
import Summary from "@/components/summary/summary";
import Detail from "@/components/detail/detail";
import Time from "@/components/time/time";

export default function Status() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>2학년 4반 인원 현황</h1>
        <div className={styles.wrap}>
          <Summary />
          <Detail />
        </div>
      </div>
      <Time />
      <Image
        className={styles.background}
        src={dimigo}
        alt="background"
        width={4096}
        height={775}
      />
    </main>
  );
}
