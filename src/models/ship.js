import Point from "./point";

class Ship {
  /**
   * @param {'carrier' | 'battleship' | 'cruiser' | 'submarine' | 'destroyer'} shipType
   * @param {Point[]} positions
   * @param {Number[]} [impacts=[]]
   */
  constructor(shipType, positions, impacts = []) {
    this._shipType = shipType;
    this._positions = [...positions];
    this._impacts = impacts;
  }

  get shipType() {
    return this._shipType;
  }

  /**
   * @var {'carrier' | 'battleship' | 'cruiser' | 'submarine' | 'destroyer'} shipType
   * @returns {this}
   */
  set shipType(shipType) {
    this._shipType = shipType;
    return this;
  }

  /**
   * @returns {Point[]}
   */
  get positions() {
    return this._positions;
  }

  /**
   * @param {Point[]} positions
   * @returns {this}
   */
  set positions(positions) {
    this._positions = [...positions];
    return this;
  }

  get isSunk() {
    return this._impacts.length === this.size;
  }

  /**
   * @return {Point[]}
   */
  get impacts() {
    return this._impacts;
  }

  /**
   * Adds an impact at the start of the ship + offset.
   *
   * @param {Number} offset
   * @throws {Error}
   * @returns {this}
   */
  addImpact(offset) {
    if (offset >= 0 && offset < this.size) {
      this._impacts[offset] = true;
      return this;
    }
    throw new Error(`Invalid offset ${offset}`);
  }

  get size() {
    return this._positions.length;
  }

  /**
   * Checks that the ship is either in a vertical or an horizontal position only.
   * @returns {boolean}
   */
  isValid() {
    const vector = Point.vector(
      this._positions[0],
      this._positions[this.positions.length - 1]
    );
    return vector.x === 0 || vector.y === 0;
  }

  get isHorizontal() {
    const vector = Point.vector(
      this._positions[0],
      this._positions[this.positions.length - 1]
    );
    return vector.y === 0;
  }
}

export default Ship;
