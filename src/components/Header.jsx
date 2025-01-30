import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center p-5">
          <div>
            <NavLink
              to={"/"}
              className={`px-4 py-2 rounded-lg bg-black text-white`}
            >
              Home
            </NavLink>
          </div>
          <nav>
            <ul className="flex items-center gap-x-5">
              <li>
                <NavLink
                  to={"/counter"}
                  className={`px-4 py-2 rounded-lg bg-black text-white`}
                >
                  Counter
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/cart"}
                  className={`px-4 py-2 rounded-lg bg-black text-white`}
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/modal"}
                  className={`px-4 py-2 rounded-lg bg-black text-white`}
                >
                  Modal
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/todo"}
                  className={`px-4 py-2 rounded-lg bg-black text-white`}
                >
                  Todo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/players"}
                  className={`px-4 py-2 rounded-lg bg-black text-white`}
                >
                  Players
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
