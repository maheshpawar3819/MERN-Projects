import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    setUser: (state, action) => {
      state = action.payload.user;
      state = action.payload.token;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  const responce = await axios.post("", { email, password });
  const { user, token } = await responce.data;
  localStorage.setItem("token", token);
  dispatch(setUser({ user, token }));
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
