import React from "react";
import zx, { a, b, f as k } from "./MyApp13.jsx";
import { d, e, f as j } from "./MyApp15.jsx";
// 우연히 다른 파일끼리 import 했는데 import한 파일 이름이 같을때 as 활용

// default export는 import할 때 {} 안쳐도 됨.

function MyApp14(props) {
  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{zx}</h1>
      <hr />
      <h1>{d}</h1>
      <h1>{e}</h1>
      <hr />
      <h1>{k}</h1>
      <h1>{j}</h1>
      <h1>MyApp14</h1>
    </div>
  );
}

export default MyApp14;
