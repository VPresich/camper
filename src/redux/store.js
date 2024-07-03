import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "../redux/campers/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

// export const store = configureStore({
//   reducer: {
//     campers: campersReducer,
//   },
// });

const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(campersPersistConfig, campersReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
