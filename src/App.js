// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, updateCount] = useState(0);

  function increaseCount() {
    updateCount(count + 1);
  }

  function decreaseCount() {
    updateCount(count - 1);
  }

  function resetCount() {
    let count = 0;
    updateCount(count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="buttons">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default App;
