import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import Cell, { CELL_STATE } from "./Cell";
import Point from "../models/point";

const Board = ({ numRows, numCols }) => {
  const ships = useApi();
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const grid = [];
    for (let i = 0; i < numRows; i++) {
      grid[i] = [];
      for (let j = 0; j < numCols; j++) {
        grid[i][j] = CELL_STATE.empty;
      }
    }
    setCells(grid);
  }, [numRows, numCols]);

  const handleClick = (e) => {
    if (e.target.className.includes("cell")) {
      e.stopPropagation();
      const row = +e.target.dataset.row;
      const col = +e.target.dataset.col;

      const didHit = ships.filter((s) => {
        const position = s.positions?.find((point) => {
          return point.x === row && col === point.y;
        });
        return position instanceof Point;
      });
      const newBoard = JSON.parse(JSON.stringify(cells));
      newBoard[row][col] = Boolean(didHit) ? CELL_STATE.hit : CELL_STATE.missed;
      setCells(newBoard);
    }
  };

  console.log({ cells });

  return (
    <div className="board board--container" onClick={handleClick}>
      {cells.map((rowCells, i) => {
        return (
          <div className="board board--row" key={i}>
            {rowCells.map((c, j) => (
              <Cell status={c} row={i} col={j} key={`${i},${j}`} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
