import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {ChevronUp} from 'lucide-react';

function GridCard({item, optionDetails }) {
    const [food, setFood] = useState(false);

  return (
    <div className='w-full p-2 border rounded-md m-2' >

          <div className="flex flex-row bg-slate-50   my-3 w-full ">
            <span className="text-xl">{optionDetails}</span>
            <div className=" flex flex-col flex-1 items-end p-1 "  onClick={() => setFood((prev) => !prev)}>
           
            {!food ? <ChevronDown /> : <ChevronUp />}
            </div>
         
          </div>
          {food && <div className=''>
                {item.map((item)=>{
                    return <span className='text-xl text-gray-400 font-thin'>{item.itme}</span>;
                })}
                </div>}
          </div>
  )
}

export default GridCard
