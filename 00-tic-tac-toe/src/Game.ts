export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  turn: XO = "X";

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    const cells = this.getCells();
    if (cells[0] === cells[1] && cells[1] === cells[2]) {
      return cells[0];
    }

    return "-";
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number): void {
    if (this.getCells()[i] === "-") {
      this.cells[i] = this.turn;
      this.turn = this.getTurn() === "X" ? "O" : "X";
    }

    // if (this.getTurn() === "X") {
    //   this.turn = "O";
    // } else {
    //   this.turn = "X";
    // }
  }

  restart(): void {
    console.log("restart called");
  }
}
