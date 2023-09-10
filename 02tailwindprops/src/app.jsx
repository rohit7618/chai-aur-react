import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Card } from './components/card'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div bg-red-400><div className='grid grid-cols-4 gap-4 bg-red-400'>
    <Card username="prince"/>
   <Card username="vivek" imageUrl='https://images.pexels.com/photos/6802052/pexels-photo-6802052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
   <Card username="xyz" imageUrl='https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
   <Card username="anonymous" imageUrl='https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600'/>

    </div>
   
</div>
    
    </>
  )
}
