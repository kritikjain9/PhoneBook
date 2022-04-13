import React from "react";
import ContactCard from "./ContactCard";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
} from "react-router-dom";
import AddContacts from "./AddContacts";

const ContactList = (props) => {
  const navigate = useNavigate();

  // console.log(props);
  const deleteContact = (id) => {
    props.removeContact(id);
  };

  //this renderContacts is a template for each contact
  const renderContacts = props.contacts.map((contact) => {
    // har contact ke liye ek structure return karo, jo ki display hoga
    return (
      <div>
        {/* {console.log(contact.id)} */}
        <ContactCard
          contact={contact}
          iconClickhandler={deleteContact}
          key_div={contact.id}
        ></ContactCard>
      </div>
    );
  });

  //this is the way we will display each contact
  return (
    <div className="main">
      <br />
      <h2>Contact List</h2>
      <div className="ui middle aligned">{renderContacts}</div>
      
      <Link to="/add">
        <button className="ui button blue">Add More</button>
      </Link>

      {/* <button
        className="ui button blue"
        onClick={() => {
          navigate("/add");
        }}
      >
        Add More
      </button> */}
      <br />
    </div>
  );
};

export default ContactList;
