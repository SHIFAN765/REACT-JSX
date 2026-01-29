// src/examples/ListExample.jsx
import React from "react";

function ListExample() {
  const items = ["Apples", "Bananas", "Oranges"];
  return (
    <ul style={{ color: "#333", fontSize: "18px" }}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListExample;