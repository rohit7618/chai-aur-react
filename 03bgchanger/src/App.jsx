import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap shadow-lg bg-black rounded-3xl gap-4 p-4'>
        <button className='outline-none px-4 rounded-4xl ' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button className='outline-none px-4 rounded-4xl ' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
        <button className='outline-none px-4 rounded-4xl ' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</button>
      </div>
    </div>
   
   </div>
  )
}

export default App
