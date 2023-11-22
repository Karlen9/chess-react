import React, { FC, memo, useEffect, useMemo } from "react";
import { Colors } from "../models/Colors";
import { Cell } from "../models/Cell";
import { FigureNames } from "../models/figures/Figure";

interface CellProps {
  color: Colors;
  cell: Cell;
  selected: boolean;
  onClick: (cell: Cell) => void;
}

const CellComponent =({ color, cell, selected, onClick }: CellProps) => {
  const isUnderAttack = cell.available && cell.figure;

  useEffect(() => {
    console.log([cell.x, cell.y])
  }, [cell])
  return (
    <div
      onClick={() => onClick(cell)}
      className={`cell ${color} ${
        cell.figure?.name === FigureNames.PAWN ? "pawn" : ""
      } ${isUnderAttack ? "under-attack" : ""} ${selected ? "selected" : ""}`}
    >
      {cell.available && !isUnderAttack ? <div className="available" /> : null}
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
}

export default memo(CellComponent);
