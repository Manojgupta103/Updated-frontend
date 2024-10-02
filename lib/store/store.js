import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  // whitelist: ["authState"], 
};

const _authReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  // Add other reducers here
});

export const makeStore = () => {
  return configureStore({
    // after persisting data as simply rootreducer contains the object of reducers
    reducer: _authReducer,

    // before persisting data we would pass each reducers as an object key

    // reducer: {
    //   auth: authReducer, //initially before persisting
    // },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
}
