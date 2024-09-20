import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const AdminUpdate = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    isAdmin: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();

  //get single user data

  const getUserById = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      setUser({
        username: data.username,
        email: data.email,
        phone: data.phone,
        isAdmin: data.isAdmin,
      });
    } catch (error) {
      console.error("Error found not able to fetch data from backend");
    }
  };

  useEffect(() => {
    getUserById();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        toast.success(`User Update Successfully ${user.username}`);
        navigate("/admin/users");
      } else {
        toast.error(`Not able to update user`);
      }
    } catch (error) {
      toast.error(`Someting wrong user not Updated`);
    }
  };

  return (
    <div>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="the girl trying to fill registeration form"
                  width={"500"}
                  height={"500"}
                />
              </div>

              {/* registeration form  */}

              <div className="registration-form">
                <h1 className="main-heading mb-3">Update User</h1>
                <br />
                <form action="" onSubmit={updateUser}>
                  <div>
                    <label htmlFor="usesrname">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter your phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="valid">Is Admin</label>
                    <input
                      type="text"
                      name="isAdmin"
                      placeholder="give admin access or not"
                      id="isAdmin"
                      required
                      autoComplete="off"
                      value={user.isAdmin}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default AdminUpdate;
