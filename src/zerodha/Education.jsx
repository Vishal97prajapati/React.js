import React from 'react';
import Account from './Account';

function Education() {
  return (
    <>
      <div className="flex flex-row justify-between h-full w-full p-12 ">
        {/* image */}
        <div className="">
          <img
            src="https://zerodha.com/static/images/index-education.svg"
            alt=""
          />
        </div>
        {/* education details  */}
        <div className="flex flex-col items-start w-[35rem] gap-8">
          <h1 className="text-xl">Free and open market education</h1>
          <span>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </span>
          <button className="text-xl text-blue-700 hover:text-black">
            Varsity &rarr;
          </button>
          <span>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
            <br />
          </span>
          <button className="text-xl text-blue-700 hover:text-black">
            Trading Q&A &rarr;
          </button>
        </div>
      </div>
      <Account/>
    </>
  );
}

export default Education;
