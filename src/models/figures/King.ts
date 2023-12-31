import { Cell } from "../Cell";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.svg";
import whiteLogo from "../../assets/white-king.svg";
import { Colors } from "../Colors";

export class King extends Figure {
  hasWhiteCustlingMade: boolean = false;
  hasBlackCustlingMade: boolean = false;
  hasKingMoved: boolean = false;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    if (
      (dx === 1 && dy === 1) ||
      (dx === 1 && dy === 0) ||
      (dx === 0 && dy === 1)
    ) {
      return true;
    }

    return false;
  }
}
