import { configureStore } from "@reduxjs/toolkit";
import { ILesson } from "../models";
import { lessonsSlice } from "./slices/lessons";

export interface AppStore {
  lessons: ILesson[];
}

export default configureStore<AppStore>({
  reducer: {
    lessons: lessonsSlice.reducer,
  },
});
