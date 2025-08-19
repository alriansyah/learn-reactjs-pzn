import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  console.log(`Rendering Counter ${counter}`);

  function handleClick(): void {
    setCounter((prev) => prev + 1);
    console.log(counter);
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>

      <h1>Counter : {counter}</h1>
    </div>
  );
}

export default Counter;
