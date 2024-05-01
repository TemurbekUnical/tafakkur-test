import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productService from "./reducers/main.reducer";

const persistConfig = {
  key: "root",
  storage,
};
const combined = combineReducers({ productService });

const persistedReducer = persistReducer(persistConfig, combined);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
