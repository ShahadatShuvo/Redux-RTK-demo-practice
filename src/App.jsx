import React from "react";
import Counter from "./features/counter/Counter";
import Theme from "./features/theme/Theme";

function App() {
  return (
    <div className="text-center mt-5">
      <h1 className="text-center mt-4">Hello React Redux</h1>
      <Counter />
      <Theme />
    </div>
  );
}

export default App;
