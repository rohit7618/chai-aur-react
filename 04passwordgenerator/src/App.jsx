import { useCallback, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [password,setPassword]=useState("")
  const[characterAllowed,setCharacterAllowed]=useState(false)
  const[numberAllowed,setNumberAllowed]=useState(false)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="1234567890"
    if(characterAllowed) str+="~!@#$%^&*()_+?><"
    for (let index = 0; index < length; index++) {
      let  abc=Math.floor(Math.random()*(str.length+1))
      pass+=str.charAt(abc)
      
    }
    setPassword(pass)
  },[length,setPassword,characterAllowed,numberAllowed]);

  useEffect(()=>{passwordGenerator()},[length,passwordGenerator,characterAllowed,numberAllowed])
  const reference= useRef(null)
  const copyPasswordToclipboard=useCallback(()=>{
    reference.current?.select()
    window.navigator.clipboard.writeText(password)},[password])


  return (
    <>
      
    <div className="text-4xl text-center text-white bg-orange-300 ">Password generator
    <div className="text-4xl p-10 text-white bg-white-500 m-10">
    <input className="bg-red-300 m-4 px-3 py-3 rounded-xl " type="text" name="password" value={password}id=""  readOnly ref={reference}  placeholder='password'/>
    <button className='bg-blue-700 rounded-lg' onClick={copyPasswordToclipboard}>Copy</button>
    <div className="m-4"><input type="range" min={6} max={100}  value={length} className='cursor-pointer'  onChange={(e)=>{setLength(e.target.value)}} /><label>length:{length}</label></div>
    <div className="m-4 flex items-center gap-x-1 ">
      <input type="checkbox" defaultChecked={numberAllowed} className="rounded-xl" onChange={()=>{setNumberAllowed((prev)=>!prev);}}/>
      <label htmlFor="">Include Numbers</label>
    </div>
    <div className="m-4 flex items-center gap-x-1 ">
      <input type="checkbox" defaultChecked={characterAllowed} className="rounded-xl" onChange={()=>{setCharacterAllowed((prev)=>!prev);}}/>
      <label htmlFor="">Include special characters</label>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default App
