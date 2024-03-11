import { Basket, Heart, Logo, SearchIcon } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="bg-slate-100 static">
        <div className="container mx-auto flex justify-between px-6 py-2 text-gray-600 ">
          <p>UZB</p>
          <div className=" gap-3  hidden lg:flex text-sm font-normal">
            <Link href="#">Namoz vaqti</Link>
            <p>|</p>
            <Link href="#">alif shopda soting!</Link>
            <Link href="#">Bizga yozing</Link>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-white flex fixed left-0 right-0 h-[75px] top- py-4">
        <div className="container mx-auto  h-[31.75px] flex items-center justify-between pt-2">
          <Image src={Logo} alt="Logo" />
          <button className="py-2 duration-200 px-3 h-[43px] w-52 rounded-lg flex  items-center justify-center gap-2 relative font-medium bg-yellow-500">
            <div className=" bg-black w-6 h-1 block -mt-4">
              <span className="block  h-1 bg-black"></span>
              <span className="block mt-1 h-1 bg-black"></span>
              <span className="block mt-1  h-1 bg-black"></span>
            </div>
            <span className="hidden lg:block w-32">Tovarlar katalogi</span>
          </button>
          <div>
            <form className="flex items-center relative  bg-yellow-500 h-[42px] rounded-md">
              <div className="w-64 md:w-72 lg:w-80 xl:w-96">
                <input
                  type="search"
                  className="w-full ml-[3px] pl-4 text-sm flex items-center rounded-s-lg border-yellow-500 placeholder:text-gray-600 outline-none border-2  h-[36px]"
                  placeholder="Tovarlarni izlash"
                />
              </div>
              <button type="submit" className="p-4">
                <Image src={SearchIcon} alt="searchicon" className="w-6 h-6" />
              </button>
            </form>
          </div>
          <div className="h-[43px] gap-1 items-center flex flex-col cursor-pointer">
            <Image src={Basket} alt="basketIco" className="w-5 h-5" />
            <p className="text-[12px]">Savat</p>
          </div>
          <div className="h-[43px] gap-1 items-center flex-col cursor-pointer hidden sm:flex">
            <Image src={Heart} alt="basketIco" className="w-5 h-5" />
            <p className="text-[12px]">Saralanganlar</p>
          </div>
          <button className="border-yellow-500 border-2 w-[63px] h-[42px] rounded-lg text-sm hover:bg-yellow-100 ease-in duration-300">
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
