import "./App.css";
import "./index.js"
import {useCounter} from "./useCounter"

const Appp = () => {
 
  const {counter,handleSubtract,addubtract,handleReset}= useCounter()

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={addubtract}>add</button>    
      </div>
  );
};

export default Appp;