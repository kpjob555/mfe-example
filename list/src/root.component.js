export default function Root(props) {
  const { onItemClick, items } = props;

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              if (onItemClick) onItemClick(item);
            }}
            style={{
              cursor: onItemClick ? "pointer" : "default",
              border: "1px solid #fff",
              width: 140,
              padding: "2px 10px",
              margin: "0px 0px 4px 0px",
              borderRadius: 20,
              color: "#fff",
              background: "rgba(255,255,255, 0.25)",
            }}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
