import React from 'react';

function And() {
  const name = 'AND';
  return <div>{name === 'AND' ? <p>name = {name}</p> : null}</div>;
}
export default And;
