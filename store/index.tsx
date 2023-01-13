import { configureStore } from "@reduxjs/toolkit";
import { ILesson } from "../models";
import { lessonsSlice } from "./slices/lessons";

export interface AppStore {
  lessons: ILesson[];
}

export const store = configureStore<AppStore>({
  reducer: {
    lessons: lessonsSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
