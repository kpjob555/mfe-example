import React from "react";

const Container = ({ children }) => {
  return (
    <div
      style={{
        background: "rgba(0, 113, 168, 0.4)",
        padding: 24,
        borderRadius: 10,
        position: "relative",
        border: "1px solid #0071B4",
      }}
    >
      <div
        style={{
          color: "rgb(0, 113,180)",
          fontSize: 12,
          border: "1px solid rgb(0, 113,180)",
          padding: "2px 8px",
          borderRadius: 10,
          position: "absolute",
          left: 2,
          top: 2,
        }}
      >
        Shop MFE
      </div>
      {children}
    </div>
  );
};

export default Container;
