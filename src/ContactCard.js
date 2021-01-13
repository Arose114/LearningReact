import React from "react";

function ContactCard(props) {
  return (
    <div className="contacts">
      <img
        src={props.imgurl}
        alt="..."
        width="140"
        height="115"
        className="items"
      ></img>
      <p className="items">Name: {props.name}</p>
      <p className="items">Phone: {props.phone}</p>
      <p className="items">Gender: {props.gender}</p>
      <hr />
    </div>
  );
}
export default ContactCard;
