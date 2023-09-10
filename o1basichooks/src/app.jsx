import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(15)
  const  counteradd=()=>{
    if(count<20)
    setCount(count+1);
  }
  const counterSub=()=>{
    if(count>0)
    setCount(count-1);
  }

  return (
    <>
    
    <div><h1>Counter:{count}</h1>
    <button onClick={counteradd}>Add +1</button></div>
    <div><button onClick={counterSub}>Subtract 1</button></div>
    <footer>Count:{count}</footer>
      
    </>
  )
}
