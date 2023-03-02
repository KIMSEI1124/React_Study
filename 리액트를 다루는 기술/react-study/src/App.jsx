import React from 'react';
import Hello from './Ch02';
import And from './Ch02/and';
import Undefined from './Ch02/undefined';
import Inline from './Ch02/inline';
import Style from './Ch02/style';
import Close from './Ch02/close';
import ClassComponent from './Ch03/classComponent';
import EventPractice from './Ch04/2/eventPractice';
import EventPracticeOnKeyPress from './Ch04/3/EventPractice';
import EventPracticeForm from './Ch04/3/EventPracticeForm';
import Example from './Ch04/example/register04';
import ValidationSample from './Ch05/1/ValidationSample';
import ValidationRefSample from './Ch05/2/ValidationRefSample';
import ValidationCreateRefSample from './Ch05/2/ValidationCreateRefSample';
import ScrollBoxApp from './Ch05/3/ScrollBoxApp';
import Register05 from './Ch05/example/register05';
import Register051 from './Ch05/example/register051';
import Register052 from './Ch05/example/register052';
import Register053 from './Ch05/example/register053';
import IterationSample from './Ch06/3/iterationSample';
import IterationSample2 from './Ch06/2/iterationSample';
import IterationSample3 from './Ch06/3/iterationSample';
import IterationSampleInsert from './Ch06/4/iterationSampleInsert';
import IterationSampleDelete from './Ch06/4/iterationSampleDelete';
import FormInput5 from './Ch06/example/FormInput5';
import FormInput52 from './Ch06/example/FormInput52';
import Life from './Ch07';

function App() {
  return (
    <div>
      <h1>리액트를 다루는 기술</h1>
      <div>
        <h2>Ch02</h2>
        <h3>Hello, React</h3>
        <Hello />
        <h3>AND 연산자</h3>
        <And />
        <h3>undefined</h3>
        <Undefined />
        <h3>Inline</h3>
        <Inline />
        <h3>Inline Style</h3>
        <Style />
        <h3>Close Tag</h3>
        <Close />
      </div>
      <div>
        <h2>Ch03</h2>
        <h3>클래스형 컴포넌트</h3>
        <ClassComponent />
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
      <div>
        <h2>Ch05</h2>
        <h3>ref 미사용</h3>
        <ValidationSample />
        <h3>ref 사용</h3>
        <ValidationRefSample />
        <h3>createRef 사용</h3>
        <ValidationCreateRefSample />
        <h3>컴포넌트 ref</h3>
        <ScrollBoxApp />
        <h3>Example</h3>
        <Register05 />
        <Register051 />
        <Register052 />
        <Register053 />
      </div>
      <div>
        <h2>Ch06</h2>
        <h3>예제 코드 1</h3>
        <IterationSample />
        <h3>예제 코드 2 - map</h3>
        <IterationSample2 />
        <h3>예제 코드 3 - Key</h3>
        <IterationSample3 />
        <h3>예제 코드 4 - Insert</h3>
        <IterationSampleInsert />
        <h3>예제 코드 4 - Delete</h3>
        <IterationSampleDelete />
        <h3>응용</h3>
        <FormInput5 />
        <FormInput52 />
      </div>
      <div>
        <h2>Ch07</h2>
        <h3>라이프 사이클</h3>
        <Life />
      </div>
    </div>
  );
}

export default App;
