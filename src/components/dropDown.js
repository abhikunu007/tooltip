import React from "react";

//stateless Dropdown component
const Dropdown = () => {
  return (
    <div className="dropdown-wrapper">
      <label id="direction">Direction: </label>
      <select id="positions" defaultValue="right">
        <option value="right">Right</option>
        <option value="left">Left</option>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
      </select>
    </div>
  );
};

export default Dropdown;