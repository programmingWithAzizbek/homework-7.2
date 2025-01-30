import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";
import Cart from "./pages/Cart.jsx";
import Modal from "./pages/Modal.jsx";
import Todo from "./pages/Todo.jsx";
import Players from "./pages/Players.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/players" element={<Players />} />
    </Routes>
  );
}

export default App;
