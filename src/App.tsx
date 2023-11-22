import React, { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";

const App = () => {
  const [board, setBoard] = useState(new Board());

  const [whiteFiguresPlayer, setWhiteFiguresPlayer] = useState(new Player(Colors.WHITE));
  const [blackFigurePlayer, setBlackFiguresPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
    newBoard.addFigures();
    setCurrentPlayer(whiteFiguresPlayer);    
  }

  const swapPlayers = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackFigurePlayer : whiteFiguresPlayer);
  }

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} restart={restart} currentPlayer={currentPlayer} swapPlayers={swapPlayers} />
    </div>
  );
};

export default App;
