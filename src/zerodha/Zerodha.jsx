import React from 'react';
import Stockbrocker from './Stockbrocker';
import { Menu } from 'lucide-react';

function Zerodha() {
  return (
    <>
      {/* navbar */}
      <div className=" bg-slate-50 flex flex-row items-center gap-1 px-20 text-gray-600 h-16 w-full border position: fixed ">
        <img
          className=" h-10 w-16  "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy51omSDi9Ij2x3DPuonotGqAut7PZzg82lA&s"
          alt=""
        />
        <div className="flex mr-auto ">
          <h1 className="text-3xl text-blue-700 font-semibold ">ZERODHA</h1>
        </div>
        <div className="flex flex-row gap-16">
          <span>Signup</span>
          <span>About</span>
          <span>Product</span>
          <span>Pricing</span>
          <span>Support</span>
          <Menu />
        </div>
      </div>
      {/* image */}
      <div className="flex flex-row justify-center h-full w-full p-36 ">
        <img
          className="px-20"
          src="https://zerodha.com/static/images/landing.png"
          alt=""
        />
      </div>

      {/* investing sign up details  */}

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold">Invest in everuthing </h1>
        <span className="text-2xl">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </span>

        <button className=" h-10 w-40 bg-blue-600 text-white rounded-sm my-7">
          Sign up now
        </button>
      </div>
      <Stockbrocker />
    </>
  );
}

export default Zerodha;
