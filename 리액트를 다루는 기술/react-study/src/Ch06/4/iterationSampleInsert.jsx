import React, { useState } from 'react';

function IterationSampleInsert() {
  const [names, setNames] = useState([
    { id: 1, text: '사과' },
    { id: 2, text: '배' },
    { id: 3, text: '딸기' },
    { id: 4, text: '바나나' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
}
export default IterationSampleInsert;
