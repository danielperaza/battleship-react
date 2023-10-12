class Point {
  /**
   * Constructs a Point instance
   * @param {Number} x
   * @param {Number} y
   */
  constructor(x, y) {
    this.row = x;
    this.col = y;
  }

  get x() {
    return this.row;
  }

  set x(x) {
    this.row = x;
  }

  get y() {
    return this.col;
  }

  set y(y) {
    this.col = y;
  }

  /**
   * Returns the euclidean distance between two points
   * @param {Point} a
   * @param {Point} b
   */
  static distance(a, b) {
    return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
  }

  /**
   * Returns the b - a vector
   *
   * @param {Point} a
   * @param {Point} b
   */
  static vector(a, b) {
    return new Point(b.x - a.x, b.y - a.y);
  }

  /**
   * Returns the otherPoint - this vector
   * @param {Point} otherPoint
   */
  vector(otherPoint) {
    return new Point(otherPoint.x - this.x, otherPoint.y - this.y);
  }
}

export default Point;
