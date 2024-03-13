import styles from "@/components/student/option/option.module.css";

export default function Option({ location }: { location: string }) {
  const selected = "교실";
  return (
    <div className={styles.container}>
      <p className={styles.type}>{location}</p>
      {selected === location ? (
        <p className={styles.selected}>선택됨</p>
      ) : (
        <p className={styles.select}>선택</p>
      )}
    </div>
  );
}
