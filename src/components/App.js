import React from "react";
import Dropdown from "./dropDown";
import Tooltip from "./tooltip";
import Navbar from "./Navbar";

//stateful App component ...
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ///creating two state,for hover and position
      hover: false,
      position: "Right",
    };
  }

  handleMouseOver = () => {
    // console.log("over");
    this.setState({
      hover: true,
    });
    // console.log(this.state.hover);
    //calling handlePosition when mouse hover over the div..
    this.handlePositionChange();
  };

  handleMouseOut = () => {
    // console.log("out");
    this.setState({
      hover: false,
    });

    // console.log(this.state.hover);
  };

  handlePositionChange = () => {
    //getting the postion value from dom
    let position = document.getElementById("positions").value;
    // console.log(position);
    this.setState({
      position: position,
    });
  };
  render() {
    const { hover, position } = this.state; //destructuring state
    return (
     <div className="main">
      <div className="navbar">
        <Navbar/>
      </div>
       <div className="app">
        <Dropdown />
        <Tooltip
          hover={hover}
          handleMouseOver={this.handleMouseOver}
          handleMouseOut={this.handleMouseOut}
          handlePositionChange={this.handlePositionChange}
          position={position}
        />
      </div>
     </div>
    );
  }
}

export default App;