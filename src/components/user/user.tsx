import styles from "@/components/user/user.module.css";
import user from "@/../public/images/user.png";
import Image from "next/image";

export default function User() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.profile}
        src={user}
        alt="user"
        width={60}
        height={60}
      />
      <div className={styles.wrap}>
        <div className={styles.info}>
          <p className={styles.name}>2427 조성민</p>
          <p className={styles.email}>sid12g@naver.com</p>
        </div>
        <p className={styles.logout}>로그아웃</p>
      </div>
    </div>
  );
}
