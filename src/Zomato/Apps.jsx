import React from 'react';

function Apps() {
  return (
    <div className="flex flex-row justify-center h-full w-full my-32 bg-stone-50">
      <div className="p-10 h-full">
        <img
          className="h-64"
          src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
          alt=""
        />
      </div>

      <div className="flex flex-col px-2 h-96 w-2/5">
        <h1 className="text-5xl">Get the zomato app</h1>
        <span className="font-extralight py-6 text-xl">
          We will send you a link, open it on your phone to download the app.
        </span>
        <div className="flex  py-4 gap-16">
          <div className="flex">
            <input className="border " type="radio" /> 
            <label className='px-2' for="Email"> Email</label>
          </div>
          <div className="flex ">
            <input  type="radio" /> 
            <label className='px-2' for="Email">Phone</label>
          </div>
        </div>
        <div className="flex felx-row h-12 gap-2">
          <input
            className="border rounded-md w-2/3 px-2"
            type="text"
            placeholder="Email"
          />
          <button className="first: w-1/3 rounded-md bg-red-500 text-white">
            Share App Link
          </button>
        </div>
        <span className="pt-6">Download app from</span>
        <div className="flex flex-row gap-5 pt-4">
          <img
            className="h-10 w-32"
            src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
            alt=""
          />
          <img
            className="h-10 w-32"
            src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Apps;
