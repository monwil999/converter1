import { ClockStyle } from "./styled";
import { useCurrentDate } from "./useCurrentDate.js";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    day: "numeric",
    month: "long",
  });

  export const Clock = () => {
    const date = useCurrentDate();
  
    return <ClockStyle>
      Dzisiaj jest {" "}
      {formatDate(date)}</ClockStyle>;
  };