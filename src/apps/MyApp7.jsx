import React from "react";

function MyApp7(props) {
  const a = "hello";
  const b = 3.14;
  const c = true;
  const d = false;
  const e = <Comp1 />;
  // boolean 은 {}로 출력안됨
  // :prop와 사용시 attribute 사용 여부

  return (
    <>
      <li>{a}</li>
      <li>{b}</li>
      <li>{c}</li>
      <li>{d}</li>
      <li>{c.toString()}</li>
      <li>{d.toString()}</li>
      <input type="text" readOnly={c} /> {/*true 일때 비작동*/}
      <br />
      <input type="text" readOnly={d} /> {/*false 일때만 작동*/}
      <br />
      {e}
      <br />
      {e}
      <Comp1 />
    </>
  );
}

function Comp1() {
  return (
    <div>
      <h1> 컴포넌트1 </h1>
    </div>
  );
}

export default MyApp7;
