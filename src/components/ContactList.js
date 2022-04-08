import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
  const renderContacts = props.contacts.map((contact) => {
    // har contact ke liye ek structure return karo, jo ki display hoga
    return <ContactCard contact={contact} />;
  });

    /* How to render the renderContacts Component */
  return <div className="ui middle aligned">{renderContacts}</div>;
};

export default ContactList;
