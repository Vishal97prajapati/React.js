import React from 'react';
import { ChevronRight } from 'lucide-react';

function Location() {
  const myLoction = [
    { location: 'Indiranagar', placeList: '582 place' },
    { location: 'Marathahalli', placeList: '1006 place' },
    { location: 'Whitefield', placeList: '1043 place' },
    { location: 'Koramangala', placeList: '304 place' },
    { location: 'HSR', placeList: '957' },
    { location: 'Jaynagar', placeList: '622 place' },
    { location: 'JP Nagar', placeList: '728 place' },
    { location: 'Sarjapur Road', placeList: '789 place' },
    { location: 'Indiranagar', placeList: '582 place' },
  ];

  return (
    <div id="locationWrapper" 
    className="lg:grid grid-cols-12 sm:flex flex-col  gap-5 w-full py-4  px-16">
      {myLoction.map((location) => {
        return (
          <div
            id="Top-loction"
            className=" col-span-4  flex  items-center h-18     rounded-lg  shadow-md border  p-3 "
          >
            <div className="flex flex-col flex-1">
              <span className="font-normal text-lg">{location.location}</span>
              <span className="text-sm">{location.placeList}</span>
            </div>
            <div className=" my-auto  ">
              <ChevronRight />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Location;
