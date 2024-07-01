import React from 'react';
import Pricing from './Pricing';

function ZerodhTrust() {
  return (
    <>
      <div className="flex flex-row h-full w-full justify-center p-10">
        {/* Trust with confident */}

        <div className="flex flex-col p-8">
          <h1 className="text-3xl font-semibold mb-10">Trust with confident</h1>
          <h1 className="text-xl font-semibold mb-3">Customer-first always</h1>
          <span>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            worth of equity investments.
          </span>
          <h1 className="text-xl font-semibold mb-3 mt-5">
            No spam or gimmicks
          </h1>
          <span>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </span>
          <h1 className="text-xl font-semibold mb-3 mt-5">
            The Zerodha universe
          </h1>
          <span>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </span>
          <h1 className="text-xl font-semibold mb-3 mt-5">
            Do better with money
          </h1>
          <span>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </span>
        </div>
        {/* Product explore */}
        <div className="">
          <img src="https://zerodha.com/static/images/ecosystem.png" alt="" />
          <div className="flex flex-row justify-center gap-12">
            <button className="text-xl text-blue-700 hover:text-black">
              Explore our products &rarr;
            </button>
            <button className="text-xl text-blue-700 hover:text-black">
              Try Kite demo &rarr;
            </button>
          </div>
        </div>
      </div>
      <Pricing/>
    </>
  );
}

export default ZerodhTrust;
