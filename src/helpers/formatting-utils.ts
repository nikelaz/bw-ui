export const getFormattedDecimal = (num: number) => {
  if (num % 1 === 0) return num;
  return num.toFixed(2);
}
