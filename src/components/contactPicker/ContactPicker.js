import React from "react";

export const ContactPicker = ({ name, onChange, contacts }) => {
  return (
      <select name={name} onChange={onChange}>
        {contacts.map((contact) => {
          return (
            <option value={contact} key={contact}>
              {contact}
            </option>
          );
        })}
      </select>
  );
};