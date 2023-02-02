import React from "react";

//stateLess Tooltip component
class Tooltip extends React.Component {
  render() {
    const { hover, handleMouseOut, handleMouseOver, position } = this.props;
    // console.log(position);
    return (
      <div className="tooltip-wrapper">
        <div
          className="hover-me"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="info">
            <button id="btn">HOVER OVER ME!</button>
          </div>
        </div>

        {hover ? (
          <div className={`tooltip tooltip-${position} aim aim-${position}`}>
            Thanks for hovering! I'm a {position} tooltip.
          </div>
        ) : null}
      </div>
    );
  }
}

export default Tooltip;