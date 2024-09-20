import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/auth`);
      setData(response?.data);
    } catch (error) {
      console.log(`error not able to fetch data`);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/auth/user/${id}`
      );
      if (response.status === 200) {
        alert(`User Deleted`);
        //refresh page
        getUserData();
      }
    } catch (error) {
      console.log(`something wrong not able delete user`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <p className="text-center text-3xl font-bold mb-6">All Users</p>
      <div className="flex justify-end mb-4">
        <Link to={"/create"}>
          <button className="p-3 bg-blue-400 text-white rounded-md hover:bg-blue-500">
            Create User
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">
                ID
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">
                Email
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => {
              const { id, name, email} = ele;
              return (
                <tr key={id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 text-sm">{id}</td>
                  <td className="py-2 px-4 text-sm">{name}</td>
                  <td className="py-2 px-4 text-sm">{email}</td>
                  <td className="py-2 px-4 text-sm flex space-x-2">
                    <Link to={`/update/${id}`}>
                      <button className="text-blue-500 hover:underline">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => deleteUser(id)}
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
    </div>
  );
};

export default Home;
