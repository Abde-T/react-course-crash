import React, {useState} from "react";



function Counter(){
    const [counter, setCounter] = useState(0)
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        setCounter(counter-1)
    }
    return (
        <div>
        <button onClick={decrement}>  - </button>
        {counter}
        <button onClick={increment}>  + </button>
        </div>
    )
}

export default Counter