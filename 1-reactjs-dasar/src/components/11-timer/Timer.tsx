import { useRef, useState } from "react";

function Timer() {
  const [start, setStart] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const timer = useRef<number | null>(null);

  function handleStart(): void {
    const currentTime = Date.now();
    setStart(currentTime);
    setNow(currentTime);

    timer.current = window.setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop(): void {
    if (timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }

  const elapsed: number = start !== null && now !== null ? now - start : 0;

  return (
    <>
      <h1>Timer : {elapsed} ms</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default Timer;
