export const Header = () => {
  return (
    <header
      style={{
        width: "100vw",
        minWidth: "335px",
        height: "7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <img
        src="src/assets/golden corner.png"
        alt="golden corner img by pngtree.com"
        style={{ transform: "rotate(270deg)", height: "100%" }}
      />
      <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Ars Magica Spellbook</h2>

      <img
        src="src/assets/golden corner.png"
        alt="golden corner img by pngtree.com"
        style={{ height: "100%" }}
      />
    </header>
  );
};
