import { useItems } from "@elysiannxt/utils";
import List from "@elysiannxt/list";

export default function Root(props) {
  const { items, onBuy, toggleShowCart } = useItems();

  return (
    <section
      style={{
        margin: 10,
        border: "1px solid black",
        borderRadius: 10,
        overflow: "hidden",
        background: "rgba(0,0,0, 0.4)",
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: 18,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: 20,
          background: "rgba(0,0,0,0.8)",
          position: "relative",
        }}
      >
        <div
          style={{
            padding: "0px 10px",
            position: "absolute",
            left: 0,
            background: "rgba(255,255,255,0.3)",
            height: "100%",
            color: "#fff",
            borderRadius: "0px 20px 20px 0px",
          }}
        >
          Cart MFE
        </div>
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
