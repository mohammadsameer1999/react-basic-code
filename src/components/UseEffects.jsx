import React, { useEffect, useState } from 'react'

const UseEffects = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("UseEffect is running Here");

        document.title = counter

    },[counter])
    return (
        <>
            <div>
                <h1>Counter : {counter}</h1>
                <button onClick={(() =>
                    setCounter(counter + 1))}>Increase</button>
                    <button onClick={() => setCounter(counter-1)}>Decrease</button>
            </div>
        </>
    )
}

export default UseEffects
