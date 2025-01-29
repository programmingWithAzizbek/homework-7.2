import React from "react";
import Header from "../components/Header.jsx";

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5">
          <h1 className="text-center mt-40 text-6xl font-bold">
            Welcome To My Homework
          </h1>
        </div>
      </main>
    </>
  );
}

export default Home;
