import styles from "@/components/etc/etc.module.css";

export default function Etc() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <p className={styles.type}>기타</p>
        <p className={styles.select}>선택</p>
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder="사유를 입력해주세요. ex) 병원"
      />
    </div>
  );
}
