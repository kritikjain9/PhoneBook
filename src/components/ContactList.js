import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
  const deleteContact = (id) => {
    
    props.removeContact(id);
  }
  const renderContacts = props.contacts.map((contact) => {
    // har contact ke liye ek structure return karo, jo ki display hoga
    return <div>
      {console.log(contact.id)}
      <ContactCard contact={contact} iconClickhandler={deleteContact} key_div={contact.id}></ContactCard>
    </div>;
  });

  return <div className="ui middle aligned">{renderContacts}</div>;
};

export default ContactList;
