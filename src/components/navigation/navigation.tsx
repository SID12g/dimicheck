import styles from "@/components/navigation/navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.activeBtn}>
        <p className={styles.activeText}>위치</p>
      </div>
      <div className={styles.deactivatedBtn}>
        <p className={styles.deactivatedText}>통계</p>
      </div>
    </div>
  );
}
