import { React, useState } from 'react'
import "./styles.css"
export default function App() {
  const [counter, setCounter] = useState(0);
 
 
  const increase = () => {
    if(counter < 10){
    setCounter(count => count + 1);
    }else{
      setCounter(10)
    }
  };
 
  const decrease = () => {
    if(counter >0){
    setCounter(count => count - 1);
    }
    else{
      setCounter(0)
    }
  };
  let style ={color:"yellow"}
  if(counter>=0 && counter <=4){
    style={color:"green"}
  }
  else if(counter>=5 && counter<=9){
    style={color:"blue"}
  }
  else{
    style={color:"red"}
  }
  return (
    <div className="app">
      <h1 style={style}>{counter}</h1>
      
      <div>
        <button className='button' onClick={increase}>Increase</button> 
        <button className='button' onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
};