import React from "react";

function App22(children) {
  return (
    <div>
      <Comp1>
        <h3>Lorem ipsum dolor</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          distinctio eos ex minus molestiae molestias nisi quae quaerat quis.
          Blanditiis error explicabo fuga illum iste iure numquam, possimus sed
          voluptatum.
        </p>
      </Comp1>
      <hr />
      <Comp2>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </Comp2>
    </div>
  );
}

//Comp1 만들기 App22에서 넘겨준 children 두번 출력하기
function Comp1({ children }) {
  return (
    <div>
      <h3>comp1</h3>
      {children}
      {children}
    </div>
  );
}

function Comp2({ children }) {
  return (
    <div>
      <h1>comp2</h1>
      {/*세 개의 li 출력되도록 16번째 줄 코드 작성*/}
      {children}
    </div>
  );
}
export default App22;
