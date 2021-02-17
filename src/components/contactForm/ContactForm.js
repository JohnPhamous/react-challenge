import React, { useState, useEffect } from 'react';

export const ContactForm = ({addContact}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [phoneValid, setPhoneValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [submitValid, setSubmitValid] = useState(false);

    const handleSubmit = e => {
      e.preventDefault();
      addContact(name, phone, email);
    };

    useEffect(() => {
      const phoneRegex = /[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}/;
      setPhoneValid(phoneRegex.test(phone));
    }, [phone]);

    useEffect(() => {
      const emailRegex = /\S+[^.]@\S+\.\S+/;
      setEmailValid(emailRegex.test(email));
    }, [email]);

    useEffect(() => {
      setSubmitValid(phoneValid && emailValid);
    },[phoneValid, emailValid]);

    return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Contact Name:
          <input 
            type="text" 
            onChange={e => setName(e.target.value)}
          />
        </label><br/>
        <label>
        Contact Phone (xxx-xxx-xxxx): 
        {phoneValid ? "True" : "False"} 
        <input 
            type="text" 
            onChange={e => setPhone(e.target.value)}
          />
        </label><br/>
        <label>
        Contact Email:
        {emailValid ? "True" : "False"} 
          <input 
            type="text" 
            onChange={e => setEmail(e.target.value)}
          />
        </label><br/>
        <input 
          type="submit" 
          disabled={!submitValid} 
          value="Add Contact"
        />
      </form>
    </>
  );
};