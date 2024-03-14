import styles from "@/app/register/page.module.css";
import Image from "next/image";
import dimigo from "@/../public/images/dimigo.svg";

export default function Register() {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div className={styles.container}>
      <form className={styles.form} method="POST" action="/api/auth/signup">
        <select className={styles.select} name="number" defaultValue={""}>
          <option value="" disabled hidden>
            번호
          </option>
          {numbers.map((a, i) => (
            <option value={a} key={i}>
              {a}번
            </option>
          ))}
        </select>
        <input
          className={styles.pin}
          type="password"
          name="password"
          pattern="[0-9]{4}"
          maxLength={4}
          inputMode="numeric"
          placeholder="PIN 4자리를 입력하세요"
        />
        <button className={styles.submit} type="submit">
          가입
        </button>
      </form>
      <Image
        className={styles.background}
        src={dimigo}
        alt="background"
        width={4096}
        height={775}
      />
    </div>
  );
}
