import { useState } from "react";
function Welcome(){
    const [todoInput, setTodoInput]=useState("");
    
    return(
        <div>
            <input type="text" placeholder="enter todo" id="todoInput"/>
            <button  id="addbtn">ADD</button>
            <h1></h1>
        </div>
    )
}

export default Welcome;
