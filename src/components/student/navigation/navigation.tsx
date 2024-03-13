import styles from "@/components/student/navigation/navigation.module.css";
import Link from "next/link";

export default function Navigation({ nowPage }: { nowPage: string }) {
  return (
    <div className={styles.container}>
      <Link
        href="/location"
        className={
          nowPage == "location" ? styles.activeBtn : styles.deactivatedBtn
        }
      >
        <p
          className={
            nowPage == "location" ? styles.activeText : styles.deactivatedText
          }
        >
          위치
        </p>
      </Link>
      <Link
        href="/statics"
        className={
          nowPage == "statics" ? styles.activeBtn : styles.deactivatedBtn
        }
      >
        <p
          className={
            nowPage == "statics" ? styles.activeText : styles.deactivatedText
          }
        >
          통계
        </p>
      </Link>
    </div>
  );
}
