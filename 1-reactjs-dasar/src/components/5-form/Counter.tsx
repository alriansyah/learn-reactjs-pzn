import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  console.log(`Rendering Counter ${counter}`);

  function handleClick(): void {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);

    // diposisi ini counter masih 0 / masih di snapshot saat ini sebelum di render
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
