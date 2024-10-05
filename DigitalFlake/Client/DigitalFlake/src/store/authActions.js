//all actions
// actions that will be dispatched to update the Redux state for login, logout, and user data.
import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT, SET_USER } from "./actionTypes";
import { userData } from "../../../../Server/controllers/auth-controller";

//login action
export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/login`,
        {
          email,
          password,
        }
      );

      if (response.status >= 200) {
        const token = response?.data?.token;
        const user = response?.data?.user;

        //store token in local storage
        localStorage.setItem("token", token);

        // Dispatch actions to store token and user data in Redux
        dispatch({ type: LOGIN_SUCCESS, payload: token });
        dispatch({ type: SET_USER, payload: user });
      } else {
        console.error("login faild!");
      }
    } catch (error) {
      console.error(`fetch userdata error`, error);
    }
  };
};

//logout action
export const logoutUser = () => {
  return (dispatch) => {
    //remove token from local storage
    localStorage.removeItem("token");

    //dispatch logout action
    dispatch({ type: LOGOUT });
  };
};

//fetch user data
export const fetchUserData = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status >= 200) {
        const user = response?.data?.userData;
        //dispatch
        dispatch({ type: SET_USER, payload: user });
      }
    } catch (error) {
      console.error("fetch user data error", error);
    }
  };
};
