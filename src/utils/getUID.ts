export default function getUID() {
  const uuid = crypto.randomUUID();
  return uuid;
}
