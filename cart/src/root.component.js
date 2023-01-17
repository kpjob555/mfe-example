import { useItems } from "@elysiannxt/utils";
import List from "@elysiannxt/list";

export default function Root(props) {
  const { items, onBuy, toggleShowCart } = useItems();

  return (
    <section
      style={{
        margin: 10,
        border: "1px solid white",
        borderRadius: 10,
        overflow: "hidden",
        background: "rgba(255,255,255, 0.4)",
      }}
    >
      <div
        style={{
          color: "#555",
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
          <div>
            Now you have <b>{items.length}</b> items in cart
          </div>
        )}
        <div
          style={{ position: "absolute", right: 10, cursor: "pointer" }}
          onClick={() => toggleShowCart()}
        >
          X
        </div>
      </div>
      {items.length > 0 && (
        <div
          style={{
            maxHeight: 300,
            height: 100,
            overflowY: "auto",
            marginTop: 20,
          }}
        >
          <List items={items} />
        </div>
      )}

      {items.length > 0 && (
        <div>
          <button
            style={{
              width: 60,
              height: 20,
              margin: "20px",
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
    </section>
  );
}
