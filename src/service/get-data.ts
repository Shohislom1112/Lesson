"use server";
import { productType } from "@/redux/cart-reducer";

export const getData = async () => {
  try {
    const res = await fetch("http://localhost:8080/notebook");
    const data = await res.json();

    return data as productType[];
  } catch (error) {
    
  }
};
