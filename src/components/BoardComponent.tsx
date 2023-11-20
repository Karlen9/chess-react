import React, { FC } from "react";
import CellComponent from "./CellComponent";
import { Board } from "../models/Board";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} color={cell.color} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
