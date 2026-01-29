import React from "react";
import JsxExample from "./example/JsxExample";
import ComponentsExample from "./example/ComponentsExample";
import PropsExample from "./example/PropsExample";
import CounterExample from "./example/CounterExample";
import ListExample from "./example/ListExample";
import EventExample from "./example/EventExample";
import FormExample from "./example/FormExample";
import "./App.css"; // optional, for layout styling

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <div className="example-card">
        <h1>1️⃣ JSX Example</h1>
        <JsxExample />
      </div>

      <div className="example-card">
        <h1>2️⃣ Components Example</h1>
        <ComponentsExample />
      </div>

      <div className="example-card">
        <h1>3️⃣ Props Example</h1>
        <PropsExample />
      </div>

      <div className="example-card">
        <h1>4️⃣ useState Example</h1>
        <CounterExample />
      </div>

      <div className="example-card">
        <h1>5️⃣ List Example</h1>
        <ListExample />
      </div>

      <div className="example-card">
        <h1>6️⃣ Event Example</h1>
        <EventExample />
      </div>

      <div className="example-card">
        <h1>7️⃣ Form Example</h1>
        <FormExample />
      </div>
    </div>
  );
}

export default App;