import React from "react";
import contact from "../images/contact.png";

const ContactCard = (props) => {
  
  // const { name, phone } = props.contact;

  return (
    <div>
      <div className="item">
        <div className="content">
          <a className="header">{props.contact.name}</a>
          <div className="description">
             {props.contact.phone}
            <i 
              className="trash alternate outline icon"
              style={{ color: "red", marginTop: "7px" }}
              onClick={() => {
                props.iconClickhandler( props.key_div);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
