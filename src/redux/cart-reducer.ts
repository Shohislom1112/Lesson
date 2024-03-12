"use client";
import { loadState } from "@/config/storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface productType {
  img: string;
  title: string;
  brand: string;
  price: number;
  color: string;
  ram: string;
  geForce: string;
  core: string;
  display: string;
  memory: string;
  weight: string;
  id: number;
}

interface initialStateType {
  products: Array<productType>;
  count: number;
}

const initialState: initialStateType = window.document
  ? loadState("products")
  : {
      products: [],
      count: 0,
    };

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<productType>) => {
      const itemData = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!itemData) {
        return { ...state, products: [...state.products, action.payload] };
      }
      return state;
    },
    deleteItem: (state, action: PayloadAction<{ id: number }>) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export default cartReducer.reducer;

export const { add, deleteItem } = cartReducer.actions;
