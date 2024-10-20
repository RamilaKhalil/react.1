import React from 'react';
import { useState } from 'react';

const Card = () => {

    let  [counter,setCounter] =useState(5)
    
    const addvalue = () =>{
       counter++;
       setCounter(counter );
       console.log('Counter value:', counter);
    }

  return (
    <div>
       <h1>Chai aur React</h1>
        <h2>Count value : {counter}</h2>
        <div className='flex gap-4 items-center justify-center mt-3'>
        <button onClick={addvalue} className='bg-slate-500 '>add value {counter}</button>
    
        <button className='bg-slate-500'>subtract value {counter}</button>

        <button className='bg-slate-500'>multiply value {counter}</button>
        </div>
        
        </div>
  )
}

export default Card