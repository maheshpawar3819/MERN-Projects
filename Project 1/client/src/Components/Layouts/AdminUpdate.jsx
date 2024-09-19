import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";

const AdminUpdate = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    isAdmin: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

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
                <form action="">
                  <div>
                    <label htmlFor="usesrname">usesrname</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
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
                    />
                  </div>
                  <div>
                    <label htmlFor="valid">Is Admin</label>
                    <input
                      type="text"
                      name="is admin"
                      placeholder="give admin access or not"
                      id="is amdin"
                      required
                      autoComplete="off"
                      value={user.isAdmin}
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
