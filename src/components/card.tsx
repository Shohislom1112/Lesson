"use client";
import React from "react";
import Image from "next/image";
import { productType } from "@/redux/cart-reducer";
import { useAppDispatch } from "@/redux/store";
import { add } from "@/redux/cart-reducer";

export const Card: React.FC<productType> = (props) => {
  const dispatch = useAppDispatch();
  const addStore = () => {
    dispatch(add(props));
  };
  return (
    <div>
      <div className="relative w-[200px] h-[200px]">
        <Image sizes="100%" priority alt="img" fill src={props.img} />
      </div>

      <h2>{props.title}</h2>
      <p>{props.price} $</p>
      <button onClick={addStore} className="bg-red-400">
        add
      </button>
    </div>
  );
};
