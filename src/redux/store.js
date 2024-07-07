import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import campersReducer from "../redux/campers/slice";
import geocodeReducer from "../redux/geocode/slice";
import filtersReducer from "../redux/filters/slice";
import favoritesReducer from "../redux/favorites/slice";

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

const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["favorites"],
};

const store = configureStore({
  reducer: {
    campers: persistReducer(campersPersistConfig, campersReducer),
    geocode: geocodeReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
