import React from 'react';
import Education from './Education';

function Pricing() {
  return (
    <>
      <div className="flex flex-row justify-between h-full w-full p-12">
        {/* unbeatable price   */}
        <div className="flex flex-col items-start h-40 w-[29rem] gap-6">
          <h1 className="text-2xl font-semibold ">Unbeatable pricing</h1>
          <span>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </span>
          <button className="text-xl text-blue-700 hover:text-black">
            See pricing &rarr;
          </button>
        </div>
        {/* Rate */}
        <div className="flex flex-row w-90">
          <div className="flex flex-col items-center h-44 w-72 border border-gray-500 rounded-md px-4">
            <h1 className='text-5xl font-bold pt-4'>&#8377;0</h1>
            <span  className='text-center pt-9 text-xl'>Free equity delivery and direct mutual funds </span>
          </div>
          <div className="flex flex-col items-center h-44 w-72 border border-gray-500 rounded-md px-10 ">     
            <h1 className='text-5xl font-bold pt-5 '>&#8377;20</h1>
            <span className='text-center pt-12 text-xl'>Intraday and F&O</span>
          </div>
        </div>
      </div>
      <Education/>
    </>
  );
}

export default Pricing;
