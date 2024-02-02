import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should place players value on clicked cell", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X",
      "O",
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should not be able to replace players value", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X",
      "O",
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should get winner if a row is filled by players value", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X",
      "X",
      "X",
      "O",
      "O",
      "-",
      "-",
      "-",
      "-",
    ]);

    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });
});
