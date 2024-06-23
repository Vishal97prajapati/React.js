import React, { useState } from 'react'

function Counter() {

     const [counter ,setCounter]=useState(0)


     const UpadateValue = ()=>{
        //  counter = counter+1
         setCounter(counter + 1)

     }
      const removeValue = ()=>{
        if(counter > 0  )
        setCounter(counter - 1)
      }

  return (
    <>

    <h1>React with  counter update with use state </h1>
    <h1 >Counter value : - {counter} </h1>
    <div className=' flex justify-center items-center h-52 bg-slate-300 gap-10'>
    <button onClick={UpadateValue} className=' bg-slate-950 rounded-md text-white text-2xl h-20 ' >Add value </button>

    <button onClick={removeValue}  className=' bg-red-400 rounded-md text-white text-2xl h-20'  >Remove value</button>
    
    <p>Footer :- {counter}</p>
    </div>
    </>
  )
}

export default Counter
