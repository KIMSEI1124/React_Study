import React, { useState, useEffect } from "react";

const UseEffectInfo = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 1
  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다!");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  // 2
  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다!");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // }, []);

  // 3
  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다!");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // }, [name, nickname]);

  // 4
  useEffect(() => {
    console.log("effect");
    console.log({
      name,
      nickname,
    });
    return () => {
      console.log("cleanup method");
      console.log(name);
    };
  }, [name, nickname]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default UseEffectInfo;
