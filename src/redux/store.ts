import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cart from "./cart-reducer";
import { saveState } from "@/config/storage";

export const store = configureStore({
  reducer: {
    cart,
  },
});

store.subscribe(() => {
  saveState("products", store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
