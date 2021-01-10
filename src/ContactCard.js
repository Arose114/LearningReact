import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img src={props.imgurl}></img>
      <p>Name: {props.name}</p>
      <p>Phone: {props.phone}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
}
export default ContactCard;
