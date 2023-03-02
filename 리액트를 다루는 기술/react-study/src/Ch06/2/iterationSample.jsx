import React from 'react';

function IterationSample() {
  const names = ['사과', '배', '딸기', '바나나'];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
}
export default IterationSample;
