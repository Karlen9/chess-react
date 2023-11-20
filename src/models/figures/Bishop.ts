import { Cell } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";
import { Colors } from "../Colors";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}
