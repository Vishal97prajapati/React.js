import React from 'react'

function Account() {
  return (
   <>
   <div className='flex flex-row justify-center h-full w-full'>
    <div className='flex flex-col items-center gap-8'>
        <h1 className='text-3xl font-semibold'>Open a Zerodha account</h1>
        <span className='text-xl text-gray-500'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</span>
        <button className=" h-10 w-40 bg-blue-600 text-white rounded-sm my-5">
          Sign up now
        </button>

    </div>
   </div>
   </>
  )
}

export default Account
