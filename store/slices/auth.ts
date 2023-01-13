import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models";

const initialState: IUser = {
  displayName: "",
  uid: "",
  photoURL: "",
};

export const authSlice = createSlice({
  name: "bets",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state, action) => {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
