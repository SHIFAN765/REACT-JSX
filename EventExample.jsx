// src/examples/EventExample.jsx
import React from "react";

function EventExample() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "6px 12px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#380af4",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Click Me
    </button>
  );
}

export default EventExample;