import React, { useState } from 'react'

function Bgchnager() {
    const [color , setColor]= useState("olive")
  return (
    <>
    <h1>HELLO BG CHANGER</h1>
    <div className='flex flex-row h-64 w-64 bg-red-300'>
        <button >Blue</button>
        <button>Read</button>
        <button>Yellow</button>
        <button>Green</button>
        <button>Orange</button>

    </div>
    </>
  )
}

export default Bgchnager
