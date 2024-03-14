import { redirect } from "next/navigation";
import styles from "./page.module.css";
import SignIn from "@/components/signIn";

export default function Home() {
  // redirect("/location");
  return (
    <div>
      <SignIn />
    </div>
  );
}
