import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import type { RootState, AppDispatch } from "../../redux/store";

function Counter() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  function handleIncrement(): void {
    dispatch(increment());
  }

  function handleDecrement(): void {
    dispatch(decrement());
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold">Counter : {counter}</h1>
      <div className="flex gap-1">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
