export default function moneyFormat(
  input?: number | string,
  currency: boolean = true
) {
  const number = typeof input === "string" ? parseInt(input, 10) : input;
  const formattedNumber = number?.toLocaleString("en-US").replace(/,/g, " ");
  return (
    <span>
      {formattedNumber || "0"}{" "}
      {currency && <span className="text-gray-400">UZS</span>}
    </span>
  );
}
