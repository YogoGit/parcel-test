import React from "react";

const Guitar = props => {
  return React.createElement("div", {}, [
  React.createElement("h1", {}, props.make),
  React.createElement("h2", {}, props.model),
  ]);
};
export default Guitar;
