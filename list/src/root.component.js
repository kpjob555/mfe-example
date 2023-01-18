export default function Root(props) {
  const { onItemClick, items } = props;

  return (
    <div
      style={{
        border: "2px solid #fff",
        padding: 10,
        borderRadius: "20px",
        margin: 10,
        position: "relative",
        background: "rgba(255,255,255,0.3)",
      }}
    >
      {items.map((item, index) => (
        <div
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
            background: "rgba(0,0,0, 0.3)",
          }}
        >
          <span>{item.name}</span>
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          padding: 5,
          border: "1px solid #fff",
          background: "rgba(255,255,255, 0.6)",
          fontSize: 14,
          borderRadius: 20,
          color: "#333333",
        }}
      >
        List MFE
      </div>
    </div>
  );
}
