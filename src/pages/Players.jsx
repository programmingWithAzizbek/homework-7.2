import React, { useState } from "react";
import Header from "../components/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addPlayer, removePlayer, updateScore } from "../store/playersSlice";

function Players() {
  const players = useSelector((state) => state.players.players);
  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState("");

  const handleAddPlayer = () => {
    if (playerName.trim()) {
      dispatch(addPlayer({ name: playerName }));
      setPlayerName("");
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="max-w-7xl w-full mx-auto p-5 mt-10">
          <div className="mb-5 max-w-80 w-full mx-auto flex">
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter player name..."
              className="border px-4 py-2 rounded-lg w-full"
            />
            <button
              onClick={handleAddPlayer}
              className="bg-black text-white px-4 py-2 rounded-lg ml-3"
            >
              Add
            </button>
          </div>
          <ul>
            {players.map((player) => (
              <li
                key={player.id}
                className="flex justify-between items-center p-2 border-b"
              >
                <span>{player.name}</span>
                <span>{player.score} points</span>
                <div>
                  <button
                    onClick={() =>
                      dispatch(updateScore({ id: player.id, delta: -1 }))
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded mr-3"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      dispatch(updateScore({ id: player.id, delta: 1 }))
                    }
                    className="bg-blue-500 text-white px-2.5 py-1 rounded mr-3"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removePlayer(player.id))}
                    className="bg-black text-white px-4 py-2 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Players;
