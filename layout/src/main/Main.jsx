import React from "react";

import Bar from "./bar/Bar";

export default function Main(children) {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Bar />
      </div>
      <div>{children}</div>
    </div>
  );
}
