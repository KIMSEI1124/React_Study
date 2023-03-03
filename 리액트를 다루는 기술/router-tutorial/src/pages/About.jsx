import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Hook
  const detail = searchParams.get("detail"); //  중요하게 기억1 - qs 대신 사용
  const mode = searchParams.get("mode"); //  중요하게 기억2 - qs 대신 사용

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true }); // qs 대신 사용 가능한 것 ( 문자열 -> 객체로 )
  };

  const onIncreaseMode = () => {
    console.log(mode);
    // mode === null 를 mode === "null"로 비교.
    const nextMode = mode === "null" ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  // const location = useLocation(); // location 객체를 반환
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {/* <p>쿼리 스트링 : {location.search}</p>
      <p>URL : {location.pathname}</p> */}
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
