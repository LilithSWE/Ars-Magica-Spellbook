export const colorNameToHex = (colorName: string): string => {
  if (colorName == "primary") return "#c9cba3";
  if (colorName == "secondary") return "#ffe1a8";
  if (colorName == "tertiary") return "#723d46";
  if (colorName == "bodyBg") return "#f6f4e4";
  if (colorName == "inputBg") return "#ffffff";
  if (colorName == "border") return "#472d30";
  if (colorName == "return") return "#e26d5c";
  if (colorName == "softWhite") return "#fffdef";
  else return colorName;
};

// TODO : Dark Mode
