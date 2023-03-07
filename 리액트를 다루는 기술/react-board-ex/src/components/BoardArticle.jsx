import axios from "axios";
import React from "react";

function BoardArticle({ article, handleList, handleDetail, handleUpdateForm }) {
  const handleDelete = (e) => {
    console.log("handleDelete(board_num) => ", e.target.id);
    axios
      .post("/delete", {
        num: e.target.id,
      })
      .then((res) => {
        handleList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log("BoardArticle =>", article);

  return (
    <tr>
      <td>{article.BOARD_NUM}</td>
      <td>
        <a href="#" id={article.BOARD_NUM} onClick={handleDetail}>
          {article.BOARD_TITLE}
        </a>
      </td>
      <td>{article.BOARD_WRITER}</td>
      <td>{article.mBOARD_DATE}</td>
      <td align="center">
        <input type="button" value="수정" id={article.BOARD_NUM} onClick={handleUpdateForm}></input>
        <input type="button" value="삭제" id={article.BOARD_NUM} onClick={handleDelete}></input>
      </td>
    </tr>
  );
}
export default BoardArticle;
