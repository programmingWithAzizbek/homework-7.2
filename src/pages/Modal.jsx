import React from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../store/modalSlice";

function Modal() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5">
          <div className="max-w-80 w-full mx-auto px-5 py-10 mt-40 shadow-lg rounded-lg flex justify-center items-center">
            <button
              onClick={() => dispatch(openModal())}
              className="px-4 py-2 bg-black text-white rounded-lg"
            >
              Open Modal
            </button>

            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
                <div className="max-w-80 w-full bg-white px-5 py-10 rounded-lg shadow-lg text-center -mt-24">
                  <button
                    onClick={() => dispatch(closeModal())}
                    className="px-4 py-2 bg-black text-white rounded-lg"
                  >
                    Close Modal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Modal;
