import { useState } from "react";

export const UseCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleSubtract = () => {
    if (counter > 0) {
        setCounter(counter - 1);
    }
  };
  const addubtract = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return {
    counter,
    handleSubtract,
    addubtract,
    handleReset,
  };
}