import React from 'react';
import EventPractice from './Ch04/2/eventPractice';
import EventPracticeOnKeyPress from './Ch04/3/EventPractice';
import EventPracticeForm from './Ch04/3/EventPracticeForm';
import Example from './Ch04/example/ClassExample';

function App() {
  return (
    <div>
      <h1>리액트를 다루는 기술</h1>
      <div>
        <h2>Ch01</h2>
      </div>
      <div>
        <h2>Ch04</h2>
        <h3>리액트의 이벤트 시스템</h3>
        <EventPractice />
        <h3>onKeyPress 이벤트 핸들링</h3>
        <EventPracticeOnKeyPress />
        <h3>Form 으로 동작</h3>
        <EventPracticeForm />
        <h3>Example</h3>
        <Example />
      </div>
    </div>
  );
}

export default App;
