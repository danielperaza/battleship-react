import React from "react";
import ShipModel from "../models/ship";
import BattleShipShape from "assets/Battleship Shape.png";

/**
 * @param {ShipModel} ship
 */
const Ship = ({ ship }) => {
  return <div className={`ship ship--${ship.shipType}`}></div>;
};
