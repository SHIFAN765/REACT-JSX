// src/examples/CounterExample.jsx
import React, { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ color: "#333", fontSize: "24px", fontWeight: "bold" }}>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: "10px" }}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default CounterExample;