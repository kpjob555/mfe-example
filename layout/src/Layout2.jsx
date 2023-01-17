import React from "react";

import { useItems } from "@elysiannxt/utils";
import Cart from "@elysiannxt/cart";

const Layout2 = ({ children }) => {
  const { items, toggleShowCart, showCart } = useItems();

  return (
    <div
      style={{
        background: "green",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          background: "black",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ padding: "4px 8px", fontWeight: 500, fontSize: 20 }}>
          Job Shop
        </div>
        {/* <div style={{ padding: "4px 8px" }}>Shop</div> */}
        <div
          style={{ padding: "4px 8px" }}
          onClick={() => {
            toggleShowCart();
          }}
        >
          Cart {items.length > 0 ? `(${items.length})` : null}
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
