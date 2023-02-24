import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  const val = name || "Not Null";
  const style = {
    backgroundColor: "gray",
    border: "1px solid black",
    height: Math.round(Math.random() * 300) + 50,
    width: Math.round(Math.random * 300) + 50,
    WebKitTransition: "all",
    MozTransition: "all",
    msTransition: "all",
  };
  return (
    <div>
      <div>
        <h1>변수 선언</h1>
        <p>Hello, {name}!</p>
      </div>
      <div>
        <h1>조건식1 - ?</h1>
        {name === "리액트" ? <p>참입니다.</p> : <p>거짓입니다.</p>}
        <h1>조건식2 - &&</h1>
        {name === "리액트" && <p>참입니다.</p>}
      </div>
      <div>
        <h1>값이 있을 경우에만 저장</h1>
        <p>val : {val}</p>
      </div>
      <div>
        <h1>인라인 스타일링</h1>
        <div style={style} />
      </div>
      <div>
        <h1>주석!</h1>
        {/* 주석입니다~ */}* 이렇게 하면 주석이 안됩니다! *
      </div>
      <div className="react">
        <h1>className 사용법입니다!</h1>
        {name}
      </div>
    </div>
  );
}

export default App;
