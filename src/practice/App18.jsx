import React from "react";

function Comp({ product, title, content, author }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <h3>{title}</h3>
      <h3>{content}</h3>
      <h3>{author}</h3>
    </div>
  );
}

function App18(props) {
  return (
    <div>
      <Comp
        product={{ name: "pizza", price: 3000 }} // {{}}인 이유 , 겉 {}: JavaScript 표현식 , 안쪽 {} : { 키: 값 }
        title="소년이 온다"
        content="518"
        author="한강"
      />
    </div>
  );
}

export default App18;
