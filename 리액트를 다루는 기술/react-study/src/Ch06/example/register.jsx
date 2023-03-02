import React, { useRef, useState } from 'react';

function Register06() {
  const [members, setMembers] = useState([]);
  const [nextNum, setNextNum] = useState(1);

  const input_id = useRef('');
  const input_pw = useRef('');
  const input_social0 = useRef('');
  const input_social1 = useRef('');
  const input_tel0 = useRef('');
  const input_tel1 = useRef('');
  const input_tel2 = useRef('');
  const input_btn = useRef('');

  const handlerKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.name === 'id') {
        input_pw.current.focus();
      } else if (e.target.name === 'pw') {
        input_social0.current.focus();
      } else if (e.target.name === 'social0') {
        input_social1.current.focus();
      } else if (e.target.name === 'social1') {
        input_tel0.current.focus();
      } else if (e.target.name === 'tel0') {
        input_tel1.current.focus();
      } else if (e.target.name === 'tel1') {
        input_tel2.current.focus();
      } else if (e.target.name === 'tel2') {
        input_btn.current.focus();
      }
    }
  };

  const onClick = () => {
    const nextMembers = members.concat({
      num: nextNum,
      id: input_id.current.value,
      pw: input_pw.current.value,
      social0: input_social0.current.value,
      social1: input_social1.current.value,
      tel0: input_tel0.current.value,
      tel1: input_tel1.current.value,
      tel2: input_tel2.current.value,
    });

    setMembers(nextMembers);
    setNextNum(nextNum + 1);

    input_id.current.value = '';
    input_pw.current.value = '';
    input_social0.current.value = '';
    input_social1.current.value = '';
    input_tel0.current.value = '';
    input_tel1.current.value = '';
    input_tel2.current.value = '';
  };

  const onRemove = (num) => {
    const deleteMemberList = members.filter((member) => member.num !== num);
    setMembers(deleteMemberList);
  };

  const memberList = members.map((member) => {
    <tr key={member.num}>
      <td>{member.id}</td>
      <td>{member.pw}</td>
      <td>
        {member.social0}-{member.social1}
      </td>
      <td>
        {member.tel0}-{member.tel1}-{member.tel2}
      </td>
      <td>
        <button onClick={() => onRemove(member.num)}>삭제</button>
      </td>
    </tr>;
  });

  return (
    <div>
      <center>
        <h1>회원 가입</h1>
      </center>
      <table border="1" align="center">
        <tr>
          <td>아이디</td>
          <td>
            <input type="text" name="id" placeholder="아이디" onKeyDown={handlerKeyPress} ref={input_id} />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input type="password" name="pw" placeholder="비밀번호" onKeyDown={handlerKeyPress} ref={input_pw} />
          </td>
        </tr>
        <tr>
          <td>주민번호</td>
          <td>
            <input
              type="text"
              name="social0"
              maxLength={6}
              placeholder="앞자리6자리"
              onKeyDown={handlerKeyPress}
              ref={input_social0}
            />
            -
            <input
              type="text"
              name="social1"
              maxLength={7}
              placeholder="뒷자리7자리"
              onKeyDown={handlerKeyPress}
              ref={input_social1}
            />
          </td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>
            <input
              type="text"
              name="tel0"
              maxLength={3}
              placeholder="3자리"
              onKeyDown={handlerKeyPress}
              ref={input_tel0}
            />
            -
            <input
              type="text"
              name="tel1"
              maxLength={4}
              placeholder="4자리"
              onKeyDown={handlerKeyPress}
              ref={input_tel1}
            />
            -
            <input
              type="text"
              name="tel2"
              maxLength={4}
              placeholder="4자리"
              onKeyDown={handlerKeyPress}
              ref={input_tel2}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" align="center">
            <button type="submit" onClick={onClick} onKeyDown={handlerKeyPress} ref={input_btn}>
              확인
            </button>
          </td>
        </tr>
      </table>
      <center>
        <h1>회원 목록</h1>
        <table border="1" align="center">
          <tr>
            <td>아이디</td>
            <td>비밀번호</td>
            <td>주민번호</td>
            <td>전화번호</td>
            <td>삭제</td>
          </tr>
          {memberList}
        </table>
      </center>
    </div>
  );
}

export default Register06;
