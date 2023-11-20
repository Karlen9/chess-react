import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); //черные
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // белые
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public addFigures() {
    this.addPawns();
    this.addBishops();
    this.addKings();
    this.addKnights();
    this.addRooks();
    this.addQueens();
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }
  private addKings() {}
  private addQueens() {}
  private addRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(7, 0));

    new Rook(Colors.WHITE, this.getCell(7, 7));
    new Rook(Colors.WHITE, this.getCell(0, 7));
  }
  private addKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0));
    new Knight(Colors.BLACK, this.getCell(6, 0));

    new Knight(Colors.WHITE, this.getCell(6, 7));
    new Knight(Colors.WHITE, this.getCell(6, 0));
  }
  private addBishops() {}
}