import React, { useState } from 'react'
export default function NameCh() {
    const [name,setName]=useState('Raju');

    function decrement(){
        setName('rama');
    }
    function increment(){
        setName('yousuf');
    }
    
  return (
    <div>
      <button onClick={decrement}>Press</button>
      <h1>{name}</h1>
      <button onClick={increment}>Press</button>
    </div>
  )
}
