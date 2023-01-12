import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  displayName: null,
  photoURL: null,
};

export const authSlice = createSlice({
  name: "bets",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      return {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
    },
    logout: (state, action) => {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
