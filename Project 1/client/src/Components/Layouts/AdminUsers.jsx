import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import {Link }from "react-router-dom"

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  //get authorization token form the central store
  const { authorizationToken } = useAuth();

  //function to fetch the data from the backend
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/admin/users", {
        method: "GET",
        headers: {
          //to validate jwt token
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // store user data in the state variable
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            //to validate jwt token
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Admin users section */}
      <section className="admin-users-section">
        <div className="">
          <h1>Admin Users Data</h1>
        </div>
        <div className="containerad admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((data) => {
                return (
                  <tr key={data._id}>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>
                      <button>
                        <Link to={`/admin/users/${data._id}/edit`}>Edit</Link>
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => deleteUser(data._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminUsers;
