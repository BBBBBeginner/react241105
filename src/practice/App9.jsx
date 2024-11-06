import React from "react";

function App9(props) {
  const a = ["black", "pink", "faker"];

  /*
    <h1>black<h1>
    <h1>pink<h1>
    <h1>faker<h1>
  */

  return (
    <div>
      {a}
      <hr />
      {a.map((a) => (
        <li>{a}</li>
      ))}
    </div>
  );
}

export default App9;
