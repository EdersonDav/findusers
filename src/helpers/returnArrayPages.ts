export const returnArrayPages = (countAll: number, per_page = 10) => {
  const numbers = Object.keys(new Array(Math.ceil(countAll / per_page)).fill(null));

  return numbers.slice(1);
}