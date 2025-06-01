import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import feedReducer from "../slices/feedSlice";
import connectionReducer from "../slices/connectionSlice";
import requestReducer from "../slices/requestSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connection: connectionReducer,
    requests: requestReducer
  },
});
