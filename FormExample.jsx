// src/examples/FormExample.jsx
import React, { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted name: " + name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        style={{
          padding: "6px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "6px 12px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#59f0ff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default FormExample;