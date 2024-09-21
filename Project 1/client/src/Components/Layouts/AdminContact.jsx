import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const AdminContact = () => {
  const [contact, setContact] = useState([]);
  const { authorizationToken } = useAuth();

  const getContacts = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/admin/contacts`, {
        method: `GET`,
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(data);
      if (response.ok) {
        setContact(data);
      }
    } catch (error) {
      console.error(`not able to fetch contact details`);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        toast.success(`Delete Contact data Successfully`);
        getContacts();
      }
    } catch (error) {
      toast.error(`Something wrong not able to delete user`);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <section className="admin-contact-section">
        <h1>Admin Contact Data</h1>
        <div className="container admin-users">
          {contact.map((data) => {
            //destructure items
            const { _id, username, email, message } = data;
            return (
              <div key={_id}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={() => deleteContact(_id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AdminContact;
