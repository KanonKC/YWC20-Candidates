export function snakeCaseToTitleCase(str: string) {
  console.log(str);
  return str.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}
