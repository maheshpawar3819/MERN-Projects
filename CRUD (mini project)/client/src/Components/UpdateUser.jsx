import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getuser/${id}`)
      .then((user) => {
        setName(user?.data?.name);
        setEmail(user?.data?.email);
        setAge(user?.data?.age);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/updateUser/" + id, { name, email, age })
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form action="" onSubmit={update}>
          <h2>Update user</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
