// src/examples/PropsExample.jsx
import React from "react";

function Person(props) {
  return (
    <div>
      <h3 style={{ color: "#e70606" }}>Name: {props.name}</h3>
      <p style={{ color: "#030000" }}>Age: {props.age}</p>
    </div>
  );
}

function PropsExample() {
  return <Person name="MOHAMED SHIFAN" age={19} />;
}

export default PropsExample;