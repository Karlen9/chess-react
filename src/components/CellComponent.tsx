import React, { FC } from "react"
import { Colors } from "../models/Colors"
import { Cell } from "../models/Cell"
import { FigureNames } from "../models/figures/Figure"

interface CellProps {
  color: Colors
  cell: Cell
  selected: boolean
  onClick: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({ color, cell, selected, onClick }) => {
  return (
    <div
      onClick={() => onClick(cell)}
      className={`cell ${color} ${
        cell.figure?.name === FigureNames.PAWN ? "pawn" : ""
      } ${cell.available && cell.figure ? "under-attack" : ""} ${
        selected ? "selected" : ""
      }`}
    >
      {cell.available ? <div className="available" /> : null}
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  )
}

export default CellComponent
