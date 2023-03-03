import "./App.css";
import Counter from "./Ch08/1/Counter";
import UseStateInfo from "./Ch08/1/Info";
import InfoForm from "./Ch08/Example/InfoForm";
import UseEffectInfo from "./Ch08/2/Info";
import App82 from "./Ch08/2";
import Counter8 from "./Ch08/3/Counter";
import UseReducerInfo from "./Ch08/3/Info";
import Average from "./Ch08/4/Average";
import UseCallbackAverage from "./Ch08/5/Average";
import UseRefAverage from "./Ch08/6/Average";

function App() {
  return (
    <div>
      <h1>Ch08</h1>
      <h2>useState</h2>
      <h3>Counter</h3>
      <Counter />
      <h3>Info</h3>
      <UseStateInfo />
      <h3>Info - Form</h3>
      <InfoForm />
      <h2>useEffect</h2>
      <h3>Info</h3>
      <UseEffectInfo />
      <h3>Info - useState</h3>
      <App82 />
      <h3>useReducer</h3>
      <Counter8 />
      <UseReducerInfo />
      <h3>useMemo</h3>
      <Average />
      <h3>useCallback</h3>
      <UseCallbackAverage />
      <h3>useRef</h3>
      <UseRefAverage />
    </div>
  );
}

export default App;
