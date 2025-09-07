import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  getDoubleCounter,
} from "../../redux/counterSlice";
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

  const doubleCounter = useSelector(getDoubleCounter);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold">Counter : {counter}</h1>
      <h1 className="text-3xl font-bold">Double Counter : {doubleCounter}</h1>
      <div className="flex gap-1">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(increment(2))}
        >
          Increment + 2
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrement(2))}
        >
          Decrement - 2
        </button>
      </div>
    </div>
  );
}

export default Counter;
