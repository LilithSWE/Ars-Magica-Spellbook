import { useState, type JSX } from "react";
import type { colorKeys } from "../../types/colorKeys";
import { colorNameToHex } from "../../globalUtils/colorNameToHex";
import { sizeTransform } from "../../globalUtils/sizeTransform";
import { brightnessLevel } from "../../globalUtils/brightnessLevel";

type ButtonProps = {
  children: JSX.Element;
  onClick: () => void;
  bgColor: colorKeys;
  borderColor?: colorKeys;
  height?: "2rem" | "2.5rem" | "3rem";
  width?: "8rem" | "10rem" | "12rem" | "14rem";
};

export const Button = ({
  children,
  onClick,
  bgColor,
  borderColor = "transparent",
  height = "2.5rem",
  width = "10rem",
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const textColor = bgColor === "tertiary" ? "#ffffff" : "#000000";

  const handleClick = () => {
    setTimeout(() => {
      onClick();
      setIsActive(false);
      setIsHovered(false);
    }, 300);
  };

  return (
    <button
      style={{
        height: height,
        backgroundColor: colorNameToHex(bgColor),
        border: `1px solid ${
          isActive ? "black" : borderColor && colorNameToHex(borderColor)
        }`,
        color: textColor,
        fontWeight: isActive || isHovered ? "bold" : "normal",
        borderRadius: "5px",
        width: width,
        padding: "0 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.1s",
        marginBottom: "0.5rem",
        transform: sizeTransform(isActive, isHovered),
        filter: brightnessLevel(isActive, isHovered),
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onMouseDown={() => setIsActive(true)}
    >
      {children}
    </button>
  );
};
