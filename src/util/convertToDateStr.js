export const convertToDateStr = (no) => {
  const fullStr = new Date(no).toUTCString();
  return fullStr.slice(5, 16);
};
