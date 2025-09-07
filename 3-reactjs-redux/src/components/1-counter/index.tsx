import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

function Counter() {
  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold">Counter : {counter}</h1>
    </div>
  );
}

export default Counter;
