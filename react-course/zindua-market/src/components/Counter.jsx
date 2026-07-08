import { useState, useCallback,useMemo } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  //Memorized Calculation 
  const square = useMemo (() => {
    console.log ("Calculating Square.....");
    return count * count;

  },[count])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Square: {square} </p>

      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;