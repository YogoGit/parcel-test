import React from "react";

export const Guitar = props => {
  return (
    <div>
      <h1>{props.make} </h1>
      <h2>{props.model}</h2>
    </div>
  );
};

export default Guitar;
