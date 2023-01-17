import React from "react";

import List from "@elysiannxt/list";
import { useItems } from "@elysiannxt/utils";

const itemList = [
  { name: "Ice Lemon Tea" },
  { name: "Milk Tea" },
  { name: "Coffee" },
  { name: "Water" },
  { name: "Herb" },
];

const Content = () => {
  const { addItem } = useItems();
  return (
    <div
      style={{
        border: "1px solid #fff",
        borderRadius: "20px",
        background: "rgba(255,255,255, 0.25)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 20,
          background: "#fff",
          color: "#005586",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Available Shopping Items
      </div>
      <List items={itemList} onItemClick={addItem} />
    </div>
  );
};

export default Content;
