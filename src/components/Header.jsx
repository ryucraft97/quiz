import React from "react";

const styles = {
  header: {
    width: "100vw",
    backgroundColor: "#c0e1d3", // light mint green
    padding: "0rem 1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 999,
    boxSizing: "border-box",
  },
  logo: {
    height: "100px",
    maxWidth: "100%",
  },
  menuIcon: {
    position: "absolute",
    right: "1.5rem",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.6rem",
    cursor: "pointer",
    color: "#1e4a33", // darker green for contrast
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <img src="/logo192.png" alt="Logo" style={styles.logo} />
    </header>
  );
};

export default Header;