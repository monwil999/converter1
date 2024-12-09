import { ClockStyle } from "./styled";
import { useCurrentDate } from "../Form/useCurrentDate.js";

const formatDate = (date) =>
  date.toLocaleString("pl-PL", {
    weekday: "long",
    hour: "2-digit",
    minute:  "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

const Clock = () => {
  const date = useCurrentDate();

  return <ClockStyle>Dzisiaj jest {formatDate(date)}</ClockStyle>;
};

export default Clock;
