import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import goalReducer from "../features/Goals/goalsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
