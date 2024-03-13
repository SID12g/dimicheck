import styles from "@/components/student/header/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link style={{ textDecoration: "none" }} href="/location">
        <p className={styles.title}>DIMI CHECK</p>
      </Link>
    </div>
  );
}
