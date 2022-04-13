import React from "react";
import { Link } from "react-router-dom";
import contact from "../images/contact.png";
import ContactDetail from "./ContactDetail";

const ContactCard = (props) => {
  // const { name, phone } = props.contact;

  console.log(props);
  const { name, phone } = props;

  return (
    <div>
      <div className="item">
        <div className="content">
          <Link
            // to={{
            //   pathname: `contact/${props.contact.id}`,
            //   state: { contact: props },
            // }}
            to={`contact/${props.contact.id}`}
            state={{ contact: name }}
          >
            <div className="header">{props.contact.name}</div>
            {props.contact.phone}
          </Link>
          {/* <div> */}
          {/* <ContactDetail contactDetail={}/></div> */}
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px" }}
            onClick={() => {
              props.iconClickhandler(props.key_div);
            }}
          ></i>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ContactCard;
