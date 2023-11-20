import React, { FC, useEffect, useState } from "react";
import CellComponent from "./CellComponent";
import { Board } from "../models/Board";
import { Cell } from '../models/Cell';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const selectCell = (cell: Cell) => {
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
    } else {
      setSelectedCell(cell)
    }
  }

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard()
  }

  const updateBoard = () => {
    const currentBoardCopy = board.getBoardCopy();
    setBoard(currentBoardCopy); 
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent cell={cell} color={cell.color} onClick={selectCell} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
