import React from "react";

export const CELL_STATE = {
  empty: "empty",
  hit: "hit",
  missed: "missed"
};

/**
 * @param {CELL_STATE} status
 */
const Cell = ({ row, col, status = "empty" }) => (
  <div className={`cell cell--${status}`} data-row={row} data-col={col}>
    &nbsp;
  </div>
);

export default Cell;
