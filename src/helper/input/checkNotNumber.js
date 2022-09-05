export const FormatInput = (e) => {
  const phoneNumber = "phone_number";

  // Prevent Characters That Are Not Numbers ("e", ".", "+" & "-")
  let CheckIfNum;
  if (e.key !== undefined) {
    // Check If It's A "e", ".", "+" Or "-"
    CheckIfNum =
      e.key === "e" ||
      e.key === "." ||
      (e.target.name !== phoneNumber && e.key === "+") ||
      e.key === "-";
  } else if (e.keyCode !== undefined) {
    // Check If It's A "e" (69), "." (190), "+" (187) Or "-" (189)
    CheckIfNum =
      e.keyCode === 69 ||
      e.keyCode === 190 ||
      e.keyCode === 187 ||
      e.keyCode === 189;
  }

  return CheckIfNum && e.preventDefault();
};
