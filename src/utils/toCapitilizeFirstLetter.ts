export function toCapitalizeFirstLetter(str: string): string {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1).toLocaleLowerCase();
}
export default toCapitalizeFirstLetter;
