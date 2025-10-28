import type { JSX } from "react";

type ButtonContainerProps = {
  children: JSX.Element[];
  flexDirection?: "row" | "column";
};

export const ButtonContainer = ({
  children,
  flexDirection,
}: ButtonContainerProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirection || "row",
        gap: "0.75rem",
      }}
    >
      {children}
    </div>
  );
};
