import React from 'react';

function IterationSample() {
  const names = ['사과', '배', '딸기', '바나나'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
}
export default IterationSample;
