export const formatPhoneNumber = (str) => {
  return [
    str[0],
    str[1],
    str[2],
    str[3],
    " ",
    str[4],
    str[5],
    str[6],
    " ",
    str[7],
    str[8],
    " ",
    str[9],
    str[10],
  ].join("");
};
