import React, { useState } from "react";
import Header from "../components/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleComplete,
  deleteTodo,
  clearTodos,
} from "../store/todoSlice.js";

function Todo() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5 mt-10 flex flex-col items-center gap-y-5">
          <div className="border max-w-80 w-full mx-auto p-5 shadow-lg rounded-lg flex justify-between items-center">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="New Task..."
              className="border-none outline-none"
            />
            <button
              onClick={handleAddTodo}
              className="px-4 py-2 rounded-lg bg-black text-white"
            >
              Add
            </button>
          </div>
          <ul className="max-w-80 w-full h-80 shadow-lg overflow-y-auto scrollbar-hide flex flex-col gap-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center border max-w-80 w-full mx-auto p-5 shadow-lg rounded-lg"
              >
                <span
                  className={`overflow-x-auto scrollbar-hide cursor-pointer ${
                    todo.completed ? "line-through" : ""
                  }`}
                  onClick={() => dispatch(toggleComplete(todo.id))}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="ml-5"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#962aff"
                      d="M5.182,16.821C5.432,16.934,5.708,17,6,17h36c0.292,0,0.568-0.066,0.818-0.179 l0.104-1.555C43.029,13.673,41.883,11,38.931,11H9.069c-2.948,0-4.099,2.648-3.991,4.266L5.182,16.821z"
                      opacity=".1"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M6,17h36c0.019,0,0.036-0.005,0.055-0.006l0.119-1.778 c0.09-1.34-0.884-3.467-3.242-3.467H9.069c-2.356,0-3.333,2.108-3.242,3.466l0.119,1.779C5.964,16.995,5.981,17,6,17z"
                      opacity=".2"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M41.303,17l0.122-1.833c0.073-1.085-0.729-2.667-2.494-2.667H9.069 c-1.763,0-2.568,1.568-2.494,2.666L6.697,17H41.303z"
                      opacity=".3"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M40.552,17l0.126-1.883c0.056-0.831-0.574-1.867-1.746-1.867H9.069 c-1.171,0-1.802,1.029-1.746,1.866L7.448,17H40.552z"
                      opacity=".4"
                    ></path>
                    <linearGradient
                      id="m5MMYxt4uCEmKR85TA8oha_629QE0a9taSF_gr1"
                      x1="24"
                      x2="24"
                      y1="37.031"
                      y2="12.863"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#962aff"></stop>
                      <stop offset=".781" stop-color="#be85ff"></stop>
                      <stop offset="1" stop-color="#c99fff"></stop>
                    </linearGradient>
                    <path
                      fill="url(#m5MMYxt4uCEmKR85TA8oha_629QE0a9taSF_gr1)"
                      d="M36.129,44H11.871c-1.053,0-1.926-0.816-1.996-1.867L8.071,15.067	C8.033,14.489,8.49,14,9.069,14h29.862c0.578,0,1.036,0.489,0.998,1.067l-1.804,27.067C38.054,43.184,37.182,44,36.129,44z"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M39.936,15.06c0.035-0.575-0.422-1.06-0.998-1.06H9.062 c-0.576,0-1.033,0.485-0.998,1.06L8.303,19h31.394L39.936,15.06z"
                      opacity=".1"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M38.938,14H9.062c-0.576,0-1.033,0.485-0.998,1.06l0.221,3.654h31.429l0.221-3.654 C39.971,14.485,39.514,14,38.938,14z"
                      opacity=".15"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M38.938,14H9.062c-0.576,0-1.033,0.485-0.998,1.06l0.204,3.368h31.463l0.204-3.368 C39.971,14.485,39.514,14,38.938,14z"
                      opacity=".2"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M38.938,14H9.062c-0.576,0-1.033,0.485-0.998,1.06l0.187,3.082h31.498l0.187-3.082 C39.971,14.485,39.514,14,38.938,14z"
                      opacity=".25"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M38.938,14H9.062c-0.576,0-1.033,0.485-0.998,1.06l0.17,2.797h31.532l0.17-2.797 C39.971,14.485,39.514,14,38.938,14z"
                      opacity=".3"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M38.938,14H9.062c-0.576,0-1.033,0.485-0.998,1.06l0.152,2.511h31.567l0.152-2.511 C39.971,14.485,39.514,14,38.938,14z"
                      opacity=".35"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M38.938,14H9.062c-0.576,0-1.033,0.485-0.998,1.06l0.135,2.225h31.602l0.135-2.225 C39.971,14.485,39.514,14,38.938,14z"
                      opacity=".4"
                    ></path>
                    <path
                      fill="#962aff"
                      d="M38.938,14H9.062c-0.576,0-1.033,0.485-0.998,1.06L8.182,17h31.636l0.118-1.94 C39.971,14.485,39.514,14,38.938,14z"
                      opacity=".45"
                    ></path>
                    <linearGradient
                      id="m5MMYxt4uCEmKR85TA8ohb_629QE0a9taSF_gr2"
                      x1="23.362"
                      x2="24.552"
                      y1="1.722"
                      y2="20.886"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stop-color="#4eaefe"
                        stop-opacity=".2"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="#41a2fe"
                        stop-opacity=".4"
                      ></stop>
                    </linearGradient>
                    <path
                      fill="url(#m5MMYxt4uCEmKR85TA8ohb_629QE0a9taSF_gr2)"
                      d="M42,7H29V6c0-1.105-0.895-2-2-2h-6	c-1.105,0-2,0.895-2,2v1H6C4.895,7,4,7.895,4,9v6c0,1.105,0.895,2,2,2h36c1.105,0,2-0.895,2-2V9C44,7.895,43.105,7,42,7z"
                    ></path>
                    <linearGradient
                      id="m5MMYxt4uCEmKR85TA8ohc_629QE0a9taSF_gr3"
                      x1="24"
                      x2="24"
                      y1="17.438"
                      y2="7.888"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stop-color="#cae7f9"
                        stop-opacity=".2"
                      ></stop>
                      <stop
                        offset="1"
                        stop-color="#70c5ef"
                        stop-opacity=".5"
                      ></stop>
                    </linearGradient>
                    <path
                      fill="url(#m5MMYxt4uCEmKR85TA8ohc_629QE0a9taSF_gr3)"
                      d="M27,4.5c0.827,0,1.5,0.673,1.5,1.5v1v0.5	H29h13c0.827,0,1.5,0.673,1.5,1.5v6c0,0.827-0.673,1.5-1.5,1.5H6c-0.827,0-1.5-0.673-1.5-1.5V9c0-0.827,0.673-1.5,1.5-1.5h13h0.5V7	V6c0-0.827,0.673-1.5,1.5-1.5H27 M27,4h-6c-1.105,0-2,0.895-2,2v1H6C4.895,7,4,7.895,4,9v6c0,1.105,0.895,2,2,2h36	c1.105,0,2-0.895,2-2V9c0-1.105-0.895-2-2-2H29V6C29,4.895,28.105,4,27,4L27,4z"
                    ></path>
                    <path
                      fill="#801df2"
                      d="M24,40L24,40c-0.552,0-1-0.448-1-1V22c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v17	C25,39.552,24.552,40,24,40z"
                    ></path>
                    <path
                      fill="#801df2"
                      d="M16,40L16,40c-0.552,0-1-0.448-1-1V22c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v17	C17,39.552,16.552,40,16,40z"
                    ></path>
                    <path
                      fill="#801df2"
                      d="M32,40L32,40c-0.552,0-1-0.448-1-1V22c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v17	C33,39.552,32.552,40,32,40z"
                    ></path>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <div>
            {todos.length > 0 && (
              <button
                onClick={() => dispatch(clearTodos())}
                className="px-4 py-2 rounded-lg bg-black text-white mt-2"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Todo;
