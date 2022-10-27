import React, { useEffect, useState } from "react";

const winCount = () => Number(localStorage.getItem("wins")) || 0;
const lossesCount = () => Number(localStorage.getItem("losses")) || 0;

const Game = () => {
  const [wins, setWins] = useState(winCount());
  const [losses, setLosses] = useState(lossesCount());

  useEffect(() => {
    localStorage.setItem("wins", wins);
  }, [wins]);

  useEffect(() => {
    localStorage.setItem("losses", losses);
  }, [losses]);
  return (
    <div>
      <button onClick={() => setWins(wins + 1)}>{wins}</button>
      <button onClick={() => setLosses(wins - 1)}>{losses}</button>
    </div>
  );
};

export default Game;
