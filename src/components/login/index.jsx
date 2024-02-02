import { useState } from "react";


function On() {
    const [state, setSetstate] = useState(1);
  const [price, setprice] = useState(5000);

  const increment = () => {
    setSetstate(state - 1);
    setprice(price - 5000);
  };
  const decrement = () => {
    setSetstate(state + 1);
    setprice(price + 5000);
  };

  return (
    <div>
      <button  onClick={increment}>-</button>
      <span>{state}</span>
      <button  onClick={decrement}>+</button>
    </div>
  );
}

export default On;
