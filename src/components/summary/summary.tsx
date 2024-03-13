import styles from "@/components/summary/summary.module.css";

export default function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={styles.type}>총원</p>
        <p className={styles.number}>31명</p>
      </div>
      <div className={styles.row}>
        <p className={styles.type}>현원</p>
        <p className={styles.number}>27명</p>
      </div>
      <div className={styles.row}>
        <p className={styles.type}>결원</p>
        <p className={styles.number}>4명</p>
      </div>
    </div>
  );
}
