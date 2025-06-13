import { useState, useEffect } from "react";
import './app.css'

export default function App() {
  const [count, setcount] = useState(true)
  const data = ['red', 'blue', 'green', 'yellow']

  useEffect(() => {
    document.title = data[count]
  },
   [count])
  
  const inc = () => {
    setcount(count + 1)
      if (count > 2) {
      setcount(count - 3)
      
    }
  }
  const dec = () => {
    setcount(count - 1)
    if (count < 1) {
      setcount(count + 3)

    }
  }

  

  localStorage.setItem('data', data[count]);




  

  return (
    <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <p>{count}</p>
      <p>{  localStorage.getItem('data')}</p>
      <p style={{color: data[count]}}>{data[count]}</p>
      <p className={data[count]}>d</p>
      
    </div>
  )
}