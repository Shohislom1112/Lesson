"use client";
import { productType } from "@/redux/cart-reducer";
import Image from "next/image";
import React from "react";
import { useAppDispatch } from "@/redux/store";
import { deleteItem } from "@/redux/cart-reducer";

export const StoreCard: React.FC<productType> = (props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-5 border p-5 border-red-500 w-[300px] items-center">
      <div className="relative w-[100px] h-[100px]">
        <Image sizes="100%" priority alt="img" fill src={props.img} />
      </div>
      <div>
        <p>{props.title}</p>
        <button>-</button>
        <span>0</span>
        <button>+</button>
        <button
          className="bg-red-400"
          onClick={() => dispatch(deleteItem({ id: props.id }))}
        >
          delete
        </button>
      </div>
    </div>
  );
};
