import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img src={props.imgUrl}></img>
      <p>Name: {props.name}</p>
    </div>
  );
}
