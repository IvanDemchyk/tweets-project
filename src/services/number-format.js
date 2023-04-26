export const NumberFormat = (number) => {
  return new Intl.NumberFormat("en-UK").format(number);
};
