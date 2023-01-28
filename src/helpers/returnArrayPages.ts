export const returnArrayPages = (countAll: number) => {
  const numbers = Object.keys(new Array(Math.ceil(countAll / 10)).fill(null));

  return numbers.slice(1);
}