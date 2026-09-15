import React, { useState } from 'react'

const UseState = () => {

    const [counter, setCounter ] = useState(0);

    // let counter = 0;

    const increase = () => {

        // counter++;

        // console.log("Increase: ", counter);
        setCounter(counter + 1)
        
    };
     const decrease = () => {

        // counter--;

        // console.log("Decrease: ", counter);

        setCounter(counter - 1)
        
    }
  return (
    <>
    <h1>This is my useState</h1>
    <h1>Counter = {counter}</h1>
    <button onClick={increase}>inecrease</button>
    <button onClick={decrease}>decrease</button>
    </>
  )
}

export default UseState
