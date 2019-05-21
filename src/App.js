import React from "react";
import { render } from "react-dom";
import { Guitar } from "./Guitar";

class App extends React.Component {
  handleTitleClick() {
    alert("You Clicked the Title!");
  }
render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "My First Parcel React App!"
      ),
      React.createElement(Guitar, {
        make: "Fender",
        model: "Stratocaster",
      }),
      React.createElement(Guitar, {
        make: "Gibson",
        model: "Les Paul",
      }),
    ]);
  }
}
render(React.createElement(App), document.getElementById("root"));
