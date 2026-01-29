// src/examples/ComponentsExample.jsx
import React from "react";

function Welcome(props) {
  return <h2 style={{ color: "#1092ee" }}>Hello, {props.name}</h2>;
}

function ComponentsExample() {
  return (
    <div>
      <Welcome name="MOHAMED SHIFAN" />
    </div>
  );
}

export default ComponentsExample;