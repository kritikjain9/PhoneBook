import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import AddContacts from "./AddContacts";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contactDetails) => {
    console.log(contactDetails);
    setContacts([...contacts, contactDetails]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  /* this "contacts" dependency means whenever the contacts change, 
  we want to re - render the component */

  return (
    <div>
      <Header />
      <AddContacts addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
