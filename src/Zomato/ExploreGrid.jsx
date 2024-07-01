import React from 'react';

import gridComponent from "./data/gridComponent.json"
import GridCard from './gridProps';

function ExploreGrid() {

  const locoOption = [
    { optionDetails: 'Popular cuisines near me' },
    { optionDetails: 'Popular restaurant types near me' },
    { optionDetails: 'Top Restaurant Chains' },
    { optionDetails: 'Cities We Deliver To' },
  ];

  return (
    <div className="flex flex-col items-start px-20 h-full w-full">
      <h1 className="text-4xl">Explore options near me</h1>
      {locoOption.map((location) => {
        return (
            <GridCard item={gridComponent} optionDetails={location.optionDetails}/>
           
          
        );
      })}
    </div>
  );
}

export default ExploreGrid;
