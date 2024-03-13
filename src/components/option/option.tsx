import styles from "@/components/option/option.module.css";

export default function Option({ location }: { location: string }) {
  return (
    <div className={styles.container}>
      <p className={styles.type}>{location}</p>
      <p className={styles.select}>선택</p>
    </div>
  );
}
