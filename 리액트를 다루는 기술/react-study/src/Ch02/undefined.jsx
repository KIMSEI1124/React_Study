import React from 'react';

function Undefined() {
  const name = undefined;
  return (
    <div>
      <p>name || '값이 undefined 입니다.'</p>
      <p>{name}</p>
    </div>
  );
}

export default Undefined;
