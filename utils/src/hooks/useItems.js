import { useContext } from "react";
import { ItemsContext } from "../items-context/ItemsContext";

export default function () {
  const context = useContext(ItemsContext);
  return context;
}
