import { useState } from 'react';
import './style.scss';
import Board from './components/Board';

function App() {
  const [counter, setCounter] = useState(1);

  const onBtnClick = () => {
    console.log('hello');

    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };
  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>click on me</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
