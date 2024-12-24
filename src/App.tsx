import TallyMarks from "./components/ui/TallyMark";
import {
  increment,
  decrement,
  incrementByPayload,
  decrementByPayload,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-center items-center h-screen pb-20">
      <div className="flex items-center justify-between gap-5 p-16 border-cyan-400 border-2 rounded-md shadow ">
        <button
          onClick={() => dispatch(incrementByPayload(5))}
          className="bg-blue-600 text-white hover:bg-sky-700 px-4 py-3 rounded-md transform transition-all  duration-75"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-600 text-white hover:bg-sky-700 px-4 py-3 rounded-md transform transition-all  duration-75"
        >
          Increment +
        </button>
        <h3 className="text-3xl font-bold">{count}</h3>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-600 text-white hover:bg-sky-700 px-4 py-3 rounded-md transform transition-all  duration-75"
        >
          Decrement -
        </button>
        <button
          onClick={() => dispatch(decrementByPayload(5))}
          className="bg-amber-600 text-white hover:bg-sky-700 px-4 py-3 rounded-md transform transition-all  duration-75"
        >
          Decrement - 5
        </button>
      </div>
      <TallyMarks number={count} />
    </div>
  );
}

export default App;
