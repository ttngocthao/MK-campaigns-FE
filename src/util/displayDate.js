export const convertToDateStr = (numb) => {
  const fullStr = new Date(numb).toUTCString();
  return fullStr.slice(5, 16);
};
