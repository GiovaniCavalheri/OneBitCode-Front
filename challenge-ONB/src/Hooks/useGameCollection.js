import { useState } from "react";

function useGameColletion() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    if (!storedGames) return [];
    return JSON.parse(storedGames);
  });

  // ==> Function para adicionar os games
  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  // ==> Function para delete dos games
  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };
  return { games, addGame, removeGame };
}

export default useGameColletion;
