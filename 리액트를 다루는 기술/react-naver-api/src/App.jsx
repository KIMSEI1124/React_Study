import axios from "axios";
import React, { useState } from "react";
import { Naver } from "./key/api";
import BlogItem from "./pages/Card/BlogItem";

function App() {
  const [items, setItems] = useState(null);
  const NAVER_CLIENT_ID = Naver.ID;
  const NAVER_CLIENT_SECRET = Naver.Secret;

  const onClick = () => {
    axios
      .get("/v1/search/blog.json", {
        params: {
          query: "react", //이미지 검색 텍스트
          start: 1, //검색 시작 위치
          display: 5, //가져올 이미지 갯수
          sort: "sim", //정렬 유형 (sim:유사도)
        },
        headers: {
          "X-Naver-Client-Id": NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
        },
      })
      .then((response) => {
        setItems(response.data.items);
      })
      .catch((e) => {
        console.log("ERROR:" + e);
      });
  };

  return (
    <div>
      {items === null ? (
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
      ) : (
        <div>
          <div>
            <button onClick={onClick}>불러오기</button>
          </div>
          {items.map((item, index) => (
            <BlogItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
