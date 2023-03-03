import React, { useState } from "react";

const InfoForm = () => {
  const [form, setForm] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = form;

  const onChangeForm = (e) => {
    const key = e.target;
    setForm({
      ...form,
      [key.name]: key.value,
    });
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChangeForm} />
        <input name="nickname" value={nickname} onChange={onChangeForm} />
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

export default InfoForm;
