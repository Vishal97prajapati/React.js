import React from 'react'
import { ChevronDown } from 'lucide-react';
import { Circle } from 'lucide-react';
import Overview from './Overview';

function Navbar() {
  return (
    <>
    <div className='flex flex-row justify-between h-12 w-full px-10 p-2  bg-slate-50 '>
      <div className='flex mr-auto gap-'>
        <span className='text-gray-500'>Rewards /</span>
        <span className='text-gray-500'>Tire system /</span>
        <span>Create tires</span>
        </div>

        <button className=' flex flex-row justify-between p-1 gap-1 rounded-md bg-slate-100  w-22 text-sm '> <span className='h-4 w-4 p-3 bg-blue-600 rounded-full'></span>Vishal <ChevronDown /></button>

        
    </div>
    <div className='flex flex-row justify-between h-10 w-full  bg-slate-50 *  px-12 p-2 my-6'>
          <div className=' flex mr-auto gap-6'>
            <button className='flex flex-row justify-between'> <span className=''>&#10004;</span>Tires Level<span className='ml-5 text-gray-500'>&#10095;</span></button>
            <button> <span>&#10004;</span>Tires Reward<span className='ml-5 text-gray-500'>&#10095;</span></button>
            <button> <span>&#10004;</span>Metadat<span className='ml-5 text-gray-500'>&#10095;</span></button>
            <button> 4.Overview</button>
            
          </div>
        <button className='bg-gray-50  h-6 w-20 rounded-md'>Cancel</button>
        </div>
         
         <Overview/>
    </>
  )
}

export default Navbar
