import React from "react";

const ItemsContext = React.createContext(null);

const ItemsProvider = ({ children, context: itemsContext }) => {
  const [items, setItems] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false);

  const context = {
    ...itemsContext,
    addItem: handleAddItem,
    onBuy: () => setItems([]),
    items,
    showCart,
    toggleShowCart: () => setShowCart(!showCart),
    // deleteItem:
    //   items === 0 ? () => setItems(0) : setItems(items - 1),
  };

  return (
    <ItemsContext.Provider value={context}>{children}</ItemsContext.Provider>
  );

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, { ...newItem, id: prev.length + 1 }]);
  }
};

export { ItemsContext, ItemsProvider };
