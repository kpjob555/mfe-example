import React from "react";

export default function Root(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: 20,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 20,
          top: 2,
          border: "1px solid red",
          borderRadius: 5,
          fontSize: 12,
          padding: "1px 8px",
          color: "red",
        }}
      >
        About MFE
      </div>
      <div style={{ position: "absolute", right: 20, top: 2 }}>
        <a href="/shop">Back to shop</a>
      </div>
      <h1 style={{ background: "black", color: "white", padding: "0px 10px" }}>
        About
      </h1>

      <p style={{ padding: "0px 20px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
        magna eu bibendum tincidunt, urna nibh placerat ipsum, non congue magna
        massa eu eros. Curabitur semper, ipsum et pellentesque viverra, ipsum
        velit faucibus augue, a convallis velit velit vel velit. Sed id libero
        vel nunc rutrum tincidunt vitae euismod velit. Sed iaculis eros id
        libero tincidunt, id vestibulum mi bibendum. Sed at lorem euismod,
        congue velit vel, tristique orci. Sed id ante vel augue suscipit
        aliquet. In hac habitasse platea dictumst. Nam laoreet, magna id
        faucibus varius, est risus fermentum odio, eu tincidunt nulla est non
        magna.
      </p>
      <h2 style={{ background: "black", color: "white", padding: "0px 10px" }}>
        Random Fact
      </h2>
      <p style={{ padding: "0px 20px" }}>
        If you yelled for eight years, seven months, and six days, you would
        have produced enough sound energy to heat one cup of coffee.
      </p>
    </div>
  );
}
