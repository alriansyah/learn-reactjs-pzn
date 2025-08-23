import { useState } from "react";

interface CounterProps {
    name: string;
}

function Counter({name}: CounterProps) {
  const [count, setCount] = useState<number>(0);

  console.log(`Rendering Count ${count}`);

  function handleClick(): void {
    setCount((prev) => prev + 1);

    // diposisi ini count masih 0 / masih di snapshot saat ini sebelum di render
    console.log(count);
  }

  return (
    <div>
      <h1>Counter {name} : {count}</h1>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;
