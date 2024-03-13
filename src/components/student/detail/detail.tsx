import styles from "@/components/student/detail/detail.module.css";

export default function Detail() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={styles.type}>화장실, 물</p>
        <p className={styles.people}>1, 10, 15, 28</p>
      </div>
      <div className={styles.row}>
        <p className={styles.type}>방과후</p>
        <p className={styles.people}>
          2, 3, 5, 8, 11, 13, 14, 15, 16, 17, 23, 26, 31
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles.type}>동아리</p>
        <p className={styles.people}>
          4, 21, 22, 30, 4, 21, 22, 30, 4, 21, 22, 30, 4, 21, 22, 30
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles.type}>기타</p>
        <p className={styles.people}>
          24 (병원), 25(병원), 27 (귀가), 29 (조기입실)
        </p>
      </div>
    </div>
  );
}
