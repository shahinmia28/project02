import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const delateContact = (id) => {
    props.delateContact(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div key={Math.random()}>
        <ContactCard
          contact={contact}
          key={contact.id}
          delateContact={delateContact}
        />
      </div>
    );
  });

  return (
    <div className="container my-4 p-5">
      <div>
        <h2 className="d-inline m-5">Contact list</h2>
        <Link to={"/add"}>
          <button className="btn btn-info m-5">Go to Add Contact</button>
        </Link>
      </div>
      {renderContactList}
    </div>
  );
};

export default ContactList;
