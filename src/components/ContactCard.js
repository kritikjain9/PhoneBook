import React from "react";
import contact from "../images/contact.png";

const ContactCard = (props) => {
  
  // const { name, phone } = props.contact;

  return (
    <div>
      <div class="item">
        <div class="content">
          <a class="header">{props.contact.name}</a>
          <div class="description">
            {props.contact.phone}
            <i
              className="trash alternate outline icon"
              style={{ color: "red", marginTop: "7px" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
