import React, { FC, useEffect, useState } from "react";
import CellComponent from "./CellComponent";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import LostFiguresComponent from "./LostFiguresComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  restart: () => void;
  currentPlayer: Player | null;
  swapPlayers: () => void;
}

const BoardComponent: FC<BoardProps> = (props) => {
  const { board, setBoard, restart, currentPlayer, swapPlayers } = props;
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const onSelect = (cell: Cell) => {
    if (
      (!selectedCell && cell.isEmpty()) ||
      (selectedCell?.isEmpty() && cell.isEmpty())
    )
      return;
    if (!cell.available && !cell.figure) return;
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayers();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const currentBoardCopy = board.getBoardCopy();
    setBoard(currentBoardCopy);
  };

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <div className="game">
      <>
      <LostFiguresComponent figures={board.lostWhiteFigures} />
      <div className="board">
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                key={cell.id}
                cell={cell}
                color={cell.color}
                onClick={onSelect}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
        <LostFiguresComponent figures={board.lostBlackFigures} />
        </>
        <button onClick={restart}>Restart</button>
    </div>
  );
};

export default BoardComponent;
