import React from "react";

function MyApp5(props) {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
}

function Comp1() {
  return <h1>hi</h1>;
}

function Comp2() {
  // fragment(<></>) : root component 필요없을 때 사용
  return (
    <div>
      <h1>Lorem</h1>
      <p>Lorem ipsum dolor</p>
    </div>
  );
}

function Comp3() {
  // fragment(<></>) : root component 필요없을 때 사용
  return (
    <>
      <h1>Lorem</h1>
      <p>Lorem ipsum dolor</p>
    </>
  );
}

export default MyApp5;
