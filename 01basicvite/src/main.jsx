import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const Rohit=React.createElement('a',{href:"https://www.google.co.in/",target:"_blank"},"click me to visit google")
const Rohit1=<a href="https://www.google.co.in/">click me to visit google</a>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
  
   <div>{Rohit1}</div>
   <div> {Rohit}</div>
  </React.StrictMode>,
)
