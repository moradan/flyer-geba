export default function parseDateString(date: string) {
  return new Date(Date.parse(date));
}
