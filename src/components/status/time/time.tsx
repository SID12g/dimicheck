"use client";

import styles from "@/components/status/time/time.module.css";
import { useState } from "react";
import Moment from "react-moment";
import useInterval from "use-interval";

export default function Time() {
  const [nowTime, setNowTime] = useState(Date.now());
  useInterval(() => {
    setNowTime(Date.now());
  }, 1000);
  return (
    <div>
      <Moment className={styles.time} format={"HH:mm:ss"}>
        {nowTime}
      </Moment>
    </div>
  );
}
