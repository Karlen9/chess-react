import React, { FC } from "react";
import { Colors } from "../models/Colors";
import { Cell } from "../models/Cell";

interface CellProps {
  color: Colors;
  cell: Cell;
}

const CellComponent: FC<CellProps> = ({ color, cell }) => {
  return (
    <div className={`cell ${color}`}>
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
};

export default CellComponent;
