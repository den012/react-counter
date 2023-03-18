import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  const [ count, setCount ] = useState(0);
  const [ highScore, setHighScore ] = useState(() => {
    const savedHighScore = localStorage.getItem("highScore");
    return savedHighScore !== null ? parseInt(savedHighScore) : 0;
  });

  function increment() {
    setCount(count + 1);
    if( count + 1 > highScore){
      setHighScore(count + 1);
    }
    if(count % 10 === 9){
      document.getElementById("countNumber").classList.add("animate");
      setTimeout(() => {
        document.getElementById("countNumber").classList.remove("animate");
      }, 1000);
    }
  }
  function decrement() {
    if(count > 0)
      setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }

  useEffect(() => {
    localStorage.setItem("highScore", highScore);
  }, [highScore])

  return (
    <div className="parent">
      <div className="counter">
        <div className="title">
          <h1 id="mainText">Press to count</h1>
          <h3 id="score">High score {highScore}</h3>
        </div>
        <div className="number">
          <h1 id="countNumber">{count}</h1>
        </div>
        <div className="buttons">
          <button className="button" onClick={increment}>Add</button>
          <button className="button" onClick={decrement}>Substract</button>
        </div>
      </div>
    </div>
  );
}

export default App;
