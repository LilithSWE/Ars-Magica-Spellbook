export const Footer = () => {
  return (
    <footer
      style={{
        width: "100vw",
        minWidth: "335px",
        height: "7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <img
        src="src/assets/golden corner.png"
        alt="golden corner img by pngtree.com"
        style={{ transform: "rotate(180deg)", height: "100%" }}
      />
      <img
        src="src/assets/golden corner.png"
        alt="golden corner img by pngtree.com"
        style={{ transform: "rotate(90deg)", height: "100%" }}
      />
    </footer>
  );
};
