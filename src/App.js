import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult((preval) => preval * 0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef} className="result"> {result} </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
      </form> 
        <button onClick={plus} className="button_calc">add</button> 
        <button onClick={minus} className="button_calc">subtract</button> 
        <button onClick={times} className="button_calc">multiply</button> 
        <button onClick={divide} className="button_calc">divide</button> 
        <button onClick={resetInput} className="button_reset">resetInput</button> 
        <button onClick={resetResult} className="button_reset">resetResult</button> 
    </div> 
  ); 
} 
 
export default App; 
