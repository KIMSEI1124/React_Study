import React from 'react';

function Inline() {
  const name = '인라인 스타일링';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16, // 단위를 생략하면 px로 지정된다.
  };
  return <div style={style}>{name}</div>;
}
export default Inline;
