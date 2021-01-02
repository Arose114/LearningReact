import React from "react";

function Todo(props) {
  return (
    <p>
      <input type="checkbox"></input>&nbsp; &nbsp;
      <h5>
        {" "}
        {props.Details.name} by {props.Details.Time}
      </h5>
    </p>
  );
}

export default Todo;
