import axios from "axios";
import React from "react";
import { useState } from "react";

import BoardUpdateForm from "./components/BoardUpdateForm";
import BoardWrite from "./components/BoardWrite";
import BoardDetail from "./pages/BoardDetail";
import BoardList from "./pages/BoardList";

function App() {
  const [boardList, setBoardList] = useState({
    boardList: [],
  });

  const [article, setArticle] = useState({
    board_num: 0,
    board_writer: "",
    board_title: "",
    board_content: "",
    board_date: "",
  });

  // 0: 글쓰기, 1: 상세보기, 2: 글수정
  const [actionMode, setActionMode] = useState({ mode: 0 });

  // 글목록
  const getList = () => {
    axios.get("http://localhost:8008/list", {}).then((res) => {
      console.log("res ==>", res);
      const { data } = res;
      console.log("data ==>", data);
      setBoardList({
        boardList: data,
      });
      setActionMode({
        // ...actionMode,
        mode: 0,
      });
    });
  };

  // 상세 보기
  const handleDetail = (e) => {
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("detail =>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });
          setActionMode({
            ...actionMode,
            mode: 1, // 상세보기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // 수정폼 보기
  const handleUpdateForm = (e) => {
    alert("handleUpdateForm(actionMode) =>" + actionMode.mode + ", " + e.target.id);
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;
        console.log("handleUpdateForm =>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });
          setActionMode({
            ...actionMode,
            mode: 2, // 글 수정하기
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    console.log("handleUpdate =>", article);
    axios
      .post("http://localhost:8008/update", {
        article: article,
      })
      .then((res) => {
        console.log("handlerUpdate (changeRows)=>", res.data.changeRows);
        getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (actionMode.mode === 0) {
    // 글쓰기
    return (
      <div>
        <BoardWrite handleList={getList}></BoardWrite>
        <br />
        <BoardList
          boardList={boardList}
          actionMode={actionMode}
          handleList={getList}
          handleDetail={handleDetail}
          handleUpdateForm={handleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    // 상세보기
    return (
      <div>
        <BoardDetail article={article} handleList={getList}></BoardDetail>
        <br />
        <BoardList
          boardList={boardList}
          handleList={getList}
          handleDetail={handleDetail}
          handleUpdateForm={handleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 2) {
    // 글 수정
    return (
      <div>
        <BoardUpdateForm article={article} setArticle={setArticle} handleUpdate={handleUpdate}></BoardUpdateForm>
        <br />
        <BoardList
          boardList={boardList}
          handleList={getList}
          handleDetail={handleDetail}
          handleUpdateForm={handleUpdateForm}
        ></BoardList>
      </div>
    );
  }
}

export default App;
