import { useState } from "react";
import Counter from "./Counter";

function CounterApp() {
  const [show2, setShow2] = useState<boolean>(true);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setShow2(e.target.checked);
  }

  return (
    <div>
      {show2 ? (
        <Counter key="budi" name="Budi" />
      ) : (
        <Counter key="eko" name="Eko" />
      )}
      <input type="checkbox" checked={show2} onChange={handleChange} />
      Tampilkan Counter 2
    </div>
  );
}

export default CounterApp;
