import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="row m-3 p-3 bg-info rounded">
      <div className="col-1">
        <img className="m-auto rounded-circle w-75" src={user} alt="user" />
      </div>
      <div className="col-7">
        <h4>{name}</h4>
        <span>{email}</span>
      </div>
      <div className="col-4 m-auto">
        <h5 className="delate" onClick={() => props.delateContact(id)}>
          Delate
        </h5>
      </div>
    </div>
  );
};

export default ContactCard;
