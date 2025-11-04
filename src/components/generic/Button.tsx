import { useState, type JSX } from "react";
import type { colorKeys } from "../../types/colorKeys";
import { colorNameToHex } from "../../globalUtils/colorNameToHex";
import { sizeTransform } from "../../globalUtils/sizeTransform";
import { brightnessLevel } from "../../globalUtils/brightnessLevel";

type ButtonProps = {
  children: JSX.Element;
  onClick: () => void;
  bgColor: colorKeys;
  height?: "2rem" | "2.5rem" | "3rem";
  width?: "8rem" | "10rem" | "12rem" | "14rem";
};

export const Button = ({
  children,
  onClick,
  bgColor,
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
        border: "3px solid transparent",
        borderImage: isHovered
          ? "linear-gradient(to bottom, #FFD700, #DAA520) 1"
          : isActive
          ? "linear-gradient(to right, #FFD700, #DAA520) 1"
          : "linear-gradient(to left, #FFD700, #DAA520) 1",

        color: textColor,
        fontWeight: isActive || isHovered ? "bold" : "normal",
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
