import React from "react";

import { useItems } from "@elysiannxt/utils";
import Cart from "@elysiannxt/cart";

const Layout2 = ({ children }) => {
  const { items, toggleShowCart, showCart } = useItems();

  return (
    <div
      style={{
        background: "#3bd100",
        width: "100%",
        height: "100%",
        border: "2px solid #3a6900",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 14px",
        }}
      >
        <div style={{ padding: "4px 8px", fontWeight: 500, fontSize: 20 }}>
          Layout 2 MFE
        </div>
        <div
          style={{ padding: "4px 8px", cursor: "pointer" }}
          onClick={() => {
            toggleShowCart();
          }}
        >
          Display Cart {items.length > 0 ? `(${items.length})` : null}
        </div>
      </div>
      {showCart && (
        <div>
          <Cart />
        </div>
      )}
      <div style={{ padding: 20 }}>{children ? children : null}</div>
    </div>
  );
};

export default Layout2;
