import { useEffect, useState } from "react";
import Ship from "../models/ship";
import Point from "../models/point";

const mockData = {
  shipTypes: {
    carrier: { size: 5, count: 1 },
    battleship: { size: 4, count: 1 },
    cruiser: { size: 3, count: 1 },
    submarine: { size: 3, count: 1 },
    destroyer: { size: 2, count: 1 }
  },
  layout: [
    {
      ship: "carrier",
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9]
      ]
    },
    {
      ship: "battleship",
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5]
      ]
    },
    {
      ship: "cruiser",
      positions: [
        [8, 1],
        [8, 2],
        [8, 3]
      ]
    },
    {
      ship: "submarine",
      positions: [
        [3, 0],
        [3, 1],
        [3, 2]
      ]
    },
    {
      ship: "destroyer",
      positions: [
        [0, 0],
        [1, 0]
      ]
    }
  ]
};

const useApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      mockData.layout.map(({ ship, positions }) => {
        return new Ship(
          ship,
          positions.map(([x, y]) => new Point(x, y))
        );
      })
    );
  }, []);
  return data;
};

export default useApi;
