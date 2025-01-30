import { createSlice } from "@reduxjs/toolkit";

const loadTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const initialState = {
  todos: loadTodos(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id == action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    clearTodos: (state) => {
      state.todos = [];
      localStorage.removeItem("todos");
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, clearTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
