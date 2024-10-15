import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      (state.user = action.payload),
        localStorage.setItem("isLoggedIn", "true"),
        localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      (state.isLoggedIn = false),
        (state.user = null),
        localStorage.removeItem("isLoggedIn"),
        localStorage.removeItem("user");
    },
    setLogin(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user; //Set user details from payload
    },
  },
});

export const { login, logout, setLogin } = authSlice.actions;

export default authSlice.reducer;
