import React from 'react';
import ZerodhTrust from './ZerodhTrust';
function Stockbrocker() {
  return (
    <>
      <div className="flex flex-row justify-between h-full w-full  p-10">
        <div className="flex flex-row ">
          <img
            className="h-80 w-[32rem] "
            src="https://watermark.lovepik.com/photo/40172/7536.jpg_wh1200.jpg"
            alt=""
          />
        </div>
        <div className=" flex flex-col w-[35rem] items-center gap-6  px-12">
          <h1 className="text-4xl font-semibold">
            Largest stock broker in India
          </h1>
          <span>
            1.5+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </span>

          <div className="flex flex-row w-full justify-between ">
            <div>
              <ul className='flex flex-col gap-3 '>
                <li>Futures and Options </li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div>
              <ul className='flex flex-col gap-3'>
                <li>Stocks & IPOs </li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities </li>
              </ul>
            </div>
          </div>
          <div className='flex  flex-row justify-between w-full'>
        <button>
            <img className='w-20 h-3 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Economic_Times_logo.svg/2560px-The_Economic_Times_logo.svg.png" alt="" />
        </button>
        <button>
            <img className='w-20 h-6  ' src="https://1000logos.net/wp-content/uploads/2021/05/Forbes-logo.png" alt="" />
        </button>
        <button>
            <img className='w-20 h-10  ' src="https://bl-i.thgim.com/public/news/nwwv1h/article65913613.ece/alternates/FREE_1200/JPEG%20LOGO.jpg" alt="" />
        </button>
        <button>
            <img className='w-20 h-8  ' src="https://planetabled.com/wp-content/uploads/2019/07/The-Hindu-Logo.jpg" alt="" />
        </button>
        <button>
            <img className='w-20 h-4  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhbQ_OCEaPHy6oG-EtSwM18Ns1b4xR3nMsg&s" alt="" />
        </button>
       

        </div>
        </div>
      
      </div>
      <ZerodhTrust/>
    </>
  );
}


export default Stockbrocker;
