import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import campersReducer from "../redux/campers/slice";
import geocodeReducer from "../redux/geocode/slice";
import filtersReducer from "../redux/filters/slice";
import modalsReducer from "../redux/modals/slice";

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
    modals: modalsReducer,
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
