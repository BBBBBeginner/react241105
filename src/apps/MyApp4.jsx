import React from "react";

function MyApp4(props) {
  // jsx 작성시 주의 할 점
  // root component 있어야함
  // 종료 태그가 있어야함
  // html attribute를 대체 사용
  //    : class -> className
  // style 은 객체로 주어야함

  // label : 해당 내용을 누르면 for를 통해 연결된 곳에 커서가 올려짐

  // for : 다른 요소와 연결
  // class : 전체를 묶을때
  // id :  개별을 파악할때 사용

  return (
    <div>
      <div style={{ color: "yellow", backgroundColor: "black" }}>
        hi! 4번째 앱
      </div>
      <div>또다른 컴포넌트</div>
      <div className="note"> hi </div>
      <div>
        <label htmlFor="input1">이름</label>
        <input type="text" id="input1" />
      </div>
      <br />
    </div>
  );
}

export default MyApp4;
