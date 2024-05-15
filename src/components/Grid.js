import React from "react";
import PropTypes from "prop-types";

const getValueWithUnit = (value) => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

const Grid = ({ minWidth = 250, gap = 20, style, children }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${getValueWithUnit(
      minWidth
    )}, 1fr))`,
    gap: getValueWithUnit(gap),
    ...style
  };
  return <div style={gridStyle}>{children}</div>;
};

Grid.propTypes = {
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  children: PropTypes.node
};

export default Grid;
