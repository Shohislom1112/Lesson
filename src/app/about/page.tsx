"use client";
import { NextPage } from "next";
import { useAppSelector } from "@/redux/store";
import { StoreCard } from "@/components/store-card";

const Aboutpage: NextPage = () => {
  const { products } = useAppSelector((state) => state.cart);
  return (
    <div className="container">
      {products.map((item) => (
        <StoreCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Aboutpage;
