import { useItems } from "@elysiannxt/utils";

export default function Root(props) {
  const { addItem } = useItems();
  // const { addItem } = props;
  // console.log("🐱 👉🏼 Root 👉🏼 addItem", addItem);

  const itemList = [
    { name: "Ice Lemon Tea" },
    { name: "Milk Tea" },
    { name: "Coffee" },
    { name: "Water" },
    { name: "Herb" },
  ];

  return (
    <div>
      <ul>
        {itemList.map((item, index) => (
          <li
            key={index}
            onClick={() => addItem(item)}
            style={{
              cursor: "pointer",
              border: "1px solid #fff",
              width: 140,
              padding: "4px 10px",
              margin: "3px 0px",
              borderRadius: 20,
              color: "#fff",
            }}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
