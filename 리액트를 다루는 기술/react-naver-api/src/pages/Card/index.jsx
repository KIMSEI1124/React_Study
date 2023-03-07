import React from "react";

import * as S from "./index.styled";

function Card({ data }) {
  return (
    <S.Container>
      {data.map((blog) => {
        return (
          <>
            <p>blog.title</p>
            <p>blog.link</p>
            <p>blog.description</p>
            <p>blog.bloggername</p>
            <p>blog.bloggerlink</p>
            <p>blog.postdate</p>
          </>
        );
      })}
    </S.Container>
  );
}
export default Card;
