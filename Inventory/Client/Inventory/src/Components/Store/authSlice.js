import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });

    if (response === 200) {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      dispatch(setUser({ user, token }));
      console.log(user);
    }
  } catch (error) {
    console.error("registeration faild");
  }
};

export const register = (name, email, password, role) => async () => {
  await axios.post("http://localhost:8080/api/auth/register", {
    name,
    email,
    password,
    role,
  });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutUser());
};

export default authSlice.reducer;
