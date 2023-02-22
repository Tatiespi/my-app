import "./App.css";
import "./index.js"

  
  import { useState } from 'react';

  const App =() =>{

   const [counter, setCounter] = useState(0);
  
    const handleSubtract = () => {
     if(counter>0){
        setCounter(counter - 1);
      }
      
    };
    const addubtract = () => {
      setCounter(counter + 1);
    };
  
    const handleReset = () => {
     setCounter(0);
    };
  
    return (
      <div>
       <h1>Counter: {counter}</h1>
       <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={addubtract}>add</button>    
       </div>
   );

    };
  

  
  export default App;
  