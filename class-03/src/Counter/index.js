import { useState } from "react"
function Counter(){
    const [num ,setNum]=useState(0);
    
        function increase() {
            setNum(num +1)
        }
        function decrease() {
            setNum(num -1)
        }
    
    return(
        <div>
            <button onClick={increase}>+</button>
            <p>{num}</p>
            <button onClick={decrease}>-</button>
            <p>i am Counter</p>
        </div>
    )
}
export default Counter;