export const sizeTransform = (isActive: boolean, isHovered: boolean) => {
  if (isActive) return "scale(0.98)";
  if (isHovered) return "scale(1.05)";
  return "scale(1)";
};
