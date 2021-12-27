import { useState } from "react";
function Welcome(){
    const [todoInput, setTodoInput]=useState("");
    function showing(){
        setTodoInput(document.getElementById("todoInput").value);
        console.log(todoInput);
    }
    return(
        <div>
            <input type="text" placeholder="enter todo" id="todoInput"/>
            <button  id="addbtn" onClick={showing}>ADD</button>
            <h1>{todoInput}</h1>
        </div>
    )
}

export default Welcome;
