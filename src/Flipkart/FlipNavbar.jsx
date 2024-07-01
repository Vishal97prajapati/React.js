import React from 'react';
import { CircleUserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import Product from './Product';

function FlipNavbar() {
  return (
    <>
      <div className="flex flex-row justify-between h-16 w-full  p-3 px-8">
        <img
          className="pr-6"
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt=""
        />
        <input
          className="mr-auto w-[29rem] rounded-lg p-2 bg-slate-200 "
          type="text"
          placeholder="Seach For Products, Brand and More"
        />
        <div className=" flex flex-row gap-16">
          <button className=" flex flex-row items-center w-26 p-2 gap-2 hover:bg-blue-600 hover:text-white rounded-md">
            <CircleUserRound /> Login <ChevronDown />
          </button>
          <button className="flex flex-row items-center w-24 p-2 gap-2">
            <ShoppingCart /> Login
          </button>
          <button className=" flex flex-row items-center w-24 p-2 gap-2">
            <ShoppingBag /> Login
          </button>
          <button className="flex flex-row items-center w-10 p-2 gap-2">
            <EllipsisVertical />
          </button>
        </div>
      </div>
      <Product/>
    </>
  );
}

export default FlipNavbar;
