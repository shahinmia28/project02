import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Components/asset/bootstrap.min.css";
import "./Components/asset/style.css";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: Math.random(), ...contact }]);
  };
  const delateContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            exact
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} delateContact={delateContact} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
