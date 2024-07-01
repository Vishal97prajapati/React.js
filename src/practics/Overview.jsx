import React from 'react';

function Overview() {
    return (
        <>
            <div className="flex flex-col h-full w-full gap-5 px-12">
                <h1 className=" text-xl font-semibold">Overview:</h1>
                <div className="flex flex-row  gap-10">
                    <span className="text-gray-400">Tire system name </span>
                    <span className="text-xl font-semibold">Diamond tires</span>
                </div>
                <hr className="w-full bg-black" />
                <div className="flex flex-row  gap-24 ">
                    <span className="text-gray-400"> No of tires</span>
                    <span>2</span>
                </div>
                <hr className="w-full bg-black" />
                <div className="flex flex-row  gap-5">
                    <span className="text-gray-400">Default tire on signup</span>
                    <span className="">-</span>
                </div>
                <hr className="w-full bg-black" />
                <div className="flex flex-row  gap-14 ">
                    <span className="text-gray-400">Eligibility criteria</span>
                    <span className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                        consequuntur eos ea commo
                    </span>
                </div>
                <hr className="w-full bg-black" />
                <div className="flex flex-row h-10 p-2 bg-slate-100 border-l-4">
                    <span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
                        placeat alias sae
                    </span>
                </div>
                <span className="font-semibold">Tires:</span>
                {/* first tires level 1 */}

                <div className="flex flex-row border border-gray-500 rounded-lg gap-3 p-5 bg-gray-100">
                    <div className=" flex flex-col bg-red-300">
                        <span className="text-sm text-gray-400">Tire: Level 1</span>
                        <span className="text-2xl font-semibold">Bronze tire</span>
                        <hr className="w-full bg-black" />
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-600">
                                Eligibility criteria conditions:
                            </span>
                            <p className="text-gray-600">
                                Current active wallet points of coins{' '}
                                <span className="text-blue-700">is in between</span> 0 & 500
                            </p>

                            <p className="text-gray-600">
                                Sum of deposit_ammount is{' '}
                                <span className="text-blue-700">less than</span> 3001
                            </p>
                        </div>
                    </div>
                </div>
                {/* second tires level2 */}
                <div className="flex flex-col border border-gray-500 rounded-lg gap-3 p-5 bg-gray-100">
                    <span className="text-sm text-gray-400">Tire: Level 2</span>
                    <span className="text-2xl font-semibold">Siliver tire</span>
                    <hr className="w-full bg-black" />
                    <div className="flex flex-col gap-2">
                        <span className="text-gray-600">
                            Eligibility criteria conditions:
                        </span>
                        <p className="text-gray-600">
                            Current active wallet points of coins{' '}
                            <span className="text-blue-700">is in between</span> 501 & 1000
                        </p>
                        <p className="text-gray-600">
                            Sum of deposit_ammount is{' '}
                            <span className="text-blue-700">less than</span> 3001
                        </p>
                    </div>
                </div>
            </div>
            {/*  */}

            <div className="flex flex-row h-full w-full border border-gray-500 rounded-lg px-20 p-10">
                <div className='flex flex-row justify-between h-28 w-full bg-slate-200 gap-11'>
                    <div className='flex flex-col'>
                    <span className="text-sm text-gray-400">Tire: Level 2</span>
                    <span className="text-2xl font-semibold">Siliver tire</span>
                    </div>
                    <div className='flex flex-col'>
                        
                    </div>
                   
                   
                </div>
               
            </div>
        </>
    );
}

export default Overview;
