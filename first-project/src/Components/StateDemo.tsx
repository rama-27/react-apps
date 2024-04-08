import { useState } from "react";
function StateDemo(){
    const [count,setCount]=useState(0);

    function decrement(){
        setCount(count-1);
        console.log("decrement called");
    }
    function increment(){
        setCount(count+1);
        console.log("increment called");
    }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}
export default StateDemo;