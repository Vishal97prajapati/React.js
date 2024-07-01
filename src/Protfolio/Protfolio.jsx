import React from 'react';

function Protfolio() {
  return (
    <>
      <div className="flex flex-col h-full w-full px-10 p-20 bg-gray-200">
        {/* Address details */}
        <div className="flex flex-col justify-center gap-2 h-[30rem] w-[25rem] shadow-2xl shadow-gray-800 bg-black">
          <div className="flex flex-col items-center h-20 w-full">
            <h1 className=" text-4xl text-white ">PORTFOLIO</h1>
            <span className=" text-sm text-white">SOFTWARE DEVELOPER</span>
          </div>
          <div className=' flex flex-col justify-center mx-28  h-32 w-28 '>
          <img  className='  h-32 ' src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-83687-35537.jpg&fm=jpg" alt="" />
          </div>
          <div className='flex flex-row  gap-4 h-20 w-full px-5'>
            <div className='flex flex-col flex-wrap'>
                <h1 className=' text-wrap text-white text-xs'>Address</h1>
                <span className=' text-wrap text-white text-xs'>chinar park</span>
                <span className=' text-wrap text-white text-xs'>Kolkata:-700157</span>
            </div>
            <div className='flex flex-col w-22'>
              <span className=' text-wrap text-white text-xs'>Contact</span>
                <span className=' text-wrap text-white text-xs'>Mobile:-8910907692</span>
                <span className=' text-wrap text-white text-xs'>vishalprajapati097@gmail.com</span>
            </div>
            <div className='flex flex-col'>
                <span className=' text-wrap text-white text-xs'>hello</span>
                <span className=' text-wrap text-white text-xs'>hii</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Protfolio;
