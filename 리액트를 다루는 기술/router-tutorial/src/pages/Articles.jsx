import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Articles() {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <div>
      {/* Outlet 이 컴포넌트는 Route의 children으로 돌아가는 JSX를 보여주는 역활을 한다 */}
      <Outlet />
      <ul>
        <li>
          {/* NavLink 컴포넌트 : 링크에서 사용하는 겨오가 현재 라우터의 경로와 일치하는경우 특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트이다.*/}
          {/* NavLink 컴포넌트는 isActive를 파라미터로 전달 받으며 boolean 타입입니다. */}
          <NavLink to={"/articles/1"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink to={"/articles/2"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink to={"/articles/3"} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Articles;
