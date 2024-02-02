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
    //rows
    if (cells[0] === cells[1] && cells[1] === cells[2]) {
      return cells[0];
    }
    if (cells[3] === cells[4] && cells[4] === cells[5]) {
      return cells[3];
    }
    if (cells[6] === cells[7] && cells[7] === cells[8]) {
      return cells[6];
    }

    //cols
    if (cells[0] === cells[1] && cells[3] === cells[6]) {
      return cells[0];
    }
    if (cells[1] === cells[4] && cells[4] === cells[7]) {
      return cells[1];
    }
    if (cells[2] === cells[5] && cells[5] === cells[8]) {
      return cells[2];
    }

    //diognales
    if (cells[0] === cells[4] && cells[4] === cells[8]) {
      return cells[0];
    }
    if (cells[2] === cells[4] && cells[4] === cells[6]) {
      return cells[2];
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
