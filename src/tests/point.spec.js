import Point from "../models/point";

describe("Point", () => {
  it("should create a Point instance", () => {
    const p = new Point(3, 2);
    expect(p.x).toEqual(3);
    expect(p.y).toEqual(2);
  });
});
