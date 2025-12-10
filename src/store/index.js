import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { userAPI } from "@/feartures/User/userApi";
import userReducer from "@/feartures/User/userSlice";

import { feedApi } from "@/feartures/feed/feedApi";
import feedReducer from "@/feartures/feed/feedSlice";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [feedApi.reducerPath]: feedApi.reducer,
    user: persistedUserReducer,
    feed: feedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(userAPI.middleware)
      .concat(feedApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
