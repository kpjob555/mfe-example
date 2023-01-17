import React from "react";

const Layout1 = ({ children }) => {
  return (
    <div
      style={{
        background: "red",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          background: "yellow",
          color: "orange",
          display: "flex",
        }}
      >
        <div style={{ padding: "4px 8px" }}>Layout 1</div>
        <div style={{ padding: "4px 8px" }}>Shop</div>
        <div style={{ padding: "4px 8px" }}>Cart</div>
      </div>
      <div>{children ? children : null}</div>
    </div>
  );
};

export default Layout1;
