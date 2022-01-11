import { FC, useEffect, useState } from "react";
import styles from "./CurrentDate.module.scss";

const CurrentDate: FC = () => {
  const [finalDate, setFinalDate] = useState<string>("");

  const createNewDateString = () => {
    const date = new Date();

    const weekDay = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const year = date.getFullYear();

    const finalDate = `${weekDay}, ${day} ${month} ${year}`;
    return finalDate;
  };

  const getSecondsToTomorrow = () => {
    let now = new Date();

    let tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );

    let diff = Number(tomorrow) - Number(now);
    return diff;
  };

  useEffect(() => {
    setFinalDate(createNewDateString());

    const timeout = getSecondsToTomorrow();
    const timerId = setTimeout(createNewDateString, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [setFinalDate]);

  return <h4 className={styles.date}>{finalDate}</h4>;
};

export default CurrentDate;
