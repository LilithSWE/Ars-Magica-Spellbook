export const brightnessLevel = (isActive: boolean, isHovered: boolean) => {
  if (isActive) return "brightness(0.9)";
  if (isHovered) return "brightness(1.1)";
  return "brightness(1)";
};
