import React, { useState } from 'react';

function EventPracticeOnKeyPress() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    // 모달창으로 구현하는 것이 더 좋다.
    alert(`${username}: ${message}`);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="username" placeholder="사용자명" value={username} onChange={onChangeUsername} />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick} type="submit">
        확인
      </button>
    </div>
  );
}
export default EventPracticeOnKeyPress;
