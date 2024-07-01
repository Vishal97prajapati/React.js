import React, { useCallback, useState } from 'react'

function Passwordgenerator() {
    const [length , setLength] = useState(6)
    const[numberAllowed, setNumberAllowed]=useState(false)
    const [charAllowed , setCharAllowed]= useState(false)
    const [password , setPassword] = useState("")
    const paaswordGenerator = useCallback(()=>{
        let pass = ""
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str = "!@#$%^&*{}[]"
       for (let i= 1 ; i <=length; i++){
        let char = Math.floor(Math.random()*str.length + 1)
        pass =str.charAt(char)
       }
       setPassword(pass)

    },[length, numberAllowed, charAllowed , setPassword])
  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  text-red-500 bg-gray-400'>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full pl-1 px-3'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'> 
        <div className='flex items-center gap-x-1'>
             <input type="range" min={6} max={30} value={length} className='cursor-pointer'
             onChange={(e)=> {setLength(e.target.value)}}
             />
             <label>Length : {length}</label>
             
        </div>
         </div>
   </div>
   </>
  )
}

export default Passwordgenerator