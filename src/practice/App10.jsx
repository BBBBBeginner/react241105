import React from "react";

function App10(props) {
  const a = [
    { name: "son", age: 31 },
    { name: "rose", age: 32 },
    { name: "faker", age: 30 },
    { name: "hankang", age: 0 },
    { name: "lee", age: 0 },
    { name: "kim", age: 0 },
  ];

  // 30세 이상인 사람의 이름만 출력
  /*
  <h1>son</h1>
  <h1>faker</h1>
  <h1>hankang</h1>
  <h1>kim</h1>
   */

  return (
    <div>
      {a.map((item) => (
        <>{item.age >= 30 && <h1>{item.name}</h1>}</>
      ))}
      <hr />
      {a
        .filter((item) => item.age >= 30)
        .map((item) => (
          <h1>{item.name}</h1>
        ))}
    </div>
  );
}

export default App10;
