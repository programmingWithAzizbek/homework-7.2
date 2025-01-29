import React from "react";
import Header from "../components/Header.jsx";
import { increment, decrement, reset } from "../store/counterSlice.js";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5">
          <div className="max-w-80 w-full mx-auto mt-40 shadow-lg p-5 rounded-lg flex flex-col items-center gap-y-5">
            <span className="text-red-600">{count}</span>
            <button
              onClick={() => dispatch(increment())}
              className="px-4 py-2 rounded-lg bg-black text-white"
            >
              Increment (+)
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="px-4 py-2 rounded-lg bg-black text-white"
            >
              Decrement (-)
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="px-4 py-2 rounded-lg bg-black text-white"
            >
              Reset (0)
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Counter;
