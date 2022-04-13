import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContacts from "./AddContacts";
// import AddContactsFC from "./AddContactsFC";
import ContactDetail from "./ContactDetail";
const shortid = require("shortid");

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contactDetails) => {
    // console.log(contactDetails);

    setContacts([...contacts, { id: shortid.generate(), ...contactDetails }]);
    // console.log(this.props);
  };

  const removeContact = (id) => {
    // console.log(id)

    const newPhoneBook = contacts.filter((item) => {
      // console.log(item);
      // console.log(`Getting this instead of ${id} id`);
      // console.log(id);
      // console.log(item.id);
      return id !== item.id;
      // return item.id != "QYEscyHr8";
    });

    // console.log("Upating the contact list after deleting the element");
    // console.log(newPhoneBook);
    setContacts(newPhoneBook);
    console.log(this.props);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  /* this "contacts" dependency means whenever the contacts change, 
  we want to re - render the component */

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContacts addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} removeContact={removeContact} />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
