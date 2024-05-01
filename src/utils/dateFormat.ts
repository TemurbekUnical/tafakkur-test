import dayjs from "dayjs";

export default function dateFormat(date: string) {
  return dayjs(date).format("DD.MM.YYYY, HH:mm");
}
