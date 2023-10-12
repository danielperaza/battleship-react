import Point from "../models/point";
import Ship from "../models/ship";

describe("Ship", () => {
  it("Should construct a Ship Instance", () => {
    const positions = [new Point(1, 1), new Point(1, 2)];
    const ship = new Ship("battleship", positions);
    expect(ship.positions).toEqual(positions);
    expect(ship.shipType).toEqual("battleship");
  });
});
