import styles from "@/components/navigation/navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <p className={styles.text}>위치</p>
      </div>
      <div className={styles.button}>
        <p className={styles.text}>통계</p>
      </div>
    </div>
  );
}
