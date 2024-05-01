export default function className(
  classMap: Record<string, boolean | undefined | null | string | number>
): string {
  return Object.keys(classMap)
    .filter((key) => !!classMap[key])
    .join(" ");
}
