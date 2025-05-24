import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:7001/api/auth/get/contact");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>Error loading contacts: {error}</p>;

  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Submitted Contact Requests</h2>
      <div className="list-group">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="list-group-item mb-3 shadow-sm rounded"
          >
            <h5>{contact.name}</h5>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            <p>
              <strong>Phone:</strong> {contact.phone}
            </p>
            <p>
              <strong>Address:</strong> {contact.address}
            </p>
            <p>
              <strong>Service Type:</strong> {contact.service}
            </p>
            <p>
              <strong>Message:</strong> {contact.message}
            </p>
            <small className="text-muted">
              Submitted on: {new Date(contact.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
