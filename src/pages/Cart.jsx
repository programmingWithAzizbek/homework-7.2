import React, { useState } from "react";
import Header from "../components/Header.jsx";
import {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../store/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState({ name: "", quantity: 1 });

  const handleAddItem = () => {
    if (newItem.name.trim() == "") return;
    dispatch(
      addItem({
        id: Date.now(),
        name: newItem.name,
        quantity: newItem.quantity,
      })
    );
    setNewItem({ name: "", quantity: 1 });
  };

  return (
    <div>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5 mt-10">
          <div className="w-full rounded-lg p-5 shadow-lg">
            <div className="flex gap-x-3 my-5">
              <input
                type="text"
                placeholder="Enter item name..."
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                className="flex-1 px-5 py-2 border rounded"
              />
              <input
                type="number"
                min="1"
                value={newItem.quantity}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    quantity: Math.max(1, Number(e.target.value)),
                  })
                }
                className="w-20 px-4 py-2 border rounded"
              />
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-black text-white rounded-lg"
              >
                Add Item
              </button>
            </div>

            {cartItems.length == 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
                  >
                    <span className="font-medium text-lg">{item.name}</span>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() =>
                          dispatch(decrementQuantity({ id: item.id }))
                        }
                        className="px-4 py-1 bg-green-500 text-white rounded-md text-lg"
                      >
                        -
                      </button>

                      <span className="text-lg">{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch(incrementQuantity({ id: item.id }))
                        }
                        className="px-4 py-1 bg-blue-500 text-white rounded-md text-lg"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => dispatch(removeItem({ id: item.id }))}
                      className="px-3 py-1 bg-red-500 text-white rounded-md"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
