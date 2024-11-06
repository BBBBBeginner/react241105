import React from "react";
import c, { a, b, g as pop } from "./App13.jsx";
import h, { e, f, g as pop1 } from "./App14.jsx";

// 13, 14에 있는 export된 값들을 import 해서

// li 요소 8개로 출력
function App15(props) {
  return (
    <div>
      <li>{a}</li>
      <li>{b}</li>
      <li>{c}</li>
      <li>{pop}</li>
      <hr />
      <li>{e}</li>
      <li>{f}</li>
      <li>{h}</li>
      <li>{pop1}</li>
    </div>
  );
}

export default App15;
