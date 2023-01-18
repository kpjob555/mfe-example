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
        border: "1px solid rgb(0, 113,180)",
        borderRadius: "20px",
        background: "#99C6DC",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 20,
          background: "rgb(0, 113,180)",
          color: "#fff",
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
