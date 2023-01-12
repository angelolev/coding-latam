import { createSlice } from "@reduxjs/toolkit";
import { ILesson } from "../../models";

const initialState: ILesson[] = [];

export const lessonsSlice = createSlice({
  name: "bets",
  initialState: initialState,
  reducers: {
    setLessons: (state, action) => {
      return action.payload;
    },
    getCurrentLesson: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLessons, getCurrentLesson } = lessonsSlice.actions;

export default lessonsSlice.reducer;
