import React from "react";
import { Navigate } from "react-router-dom";

function MyPage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    // 페이지를 리다이렉트 할때 사용
    // 컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동
    // 히스토리에 기록을 저장하지 않음
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <div>
      <p>마이 페이지</p>
    </div>
  );
}
export default MyPage;
