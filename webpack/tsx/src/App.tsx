import React from 'react';

function App() {
  const sum = (a: number, b: number) => {
    return a + b;
  };
  return (
    <div>
      <h1>Webpack App! with.TSX</h1>
      <p>sum : {sum(10, 20)}</p>
    </div>
  );
}

export default App;
