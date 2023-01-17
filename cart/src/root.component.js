import { useItems } from "@elysiannxt/utils";

export default function Root(props) {
  const { items, onBuy, toggleShowCart } = useItems();

  return (
    <section
      style={{
        margin: 10,
        border: "1px solid white",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          color: "blue",
          fontSize: 18,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: 20,
          background: "white",
          position: "relative",
        }}
      >
        {items.length === 0 ? (
          <div>No items in your cart</div>
        ) : (
          <div>Now you have {items.length} items in cart</div>
        )}
        <div
          style={{ position: "absolute", right: 10, cursor: "pointer" }}
          onClick={() => toggleShowCart()}
        >
          X
        </div>
      </div>
      {items.length > 0 && (
        <div style={{ margin: 20 }}>
          {items.map((item, index) => (
            <div
              style={{ fontSize: 12, color: "#fff", margin: "3px 0px" }}
              key={index}
            >
              {item.name}
            </div>
          ))}
          {items.length > 0 && (
            <div>
              <button
                style={{
                  width: 60,
                  height: 20,
                  marginTop: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={onBuy}
              >
                Buy
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
